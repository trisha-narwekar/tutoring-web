import '../pages/Schedule.css';
import React, { useEffect, useState } from 'react';
import '../pages/Navbar.css';
import { collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc, where} from "firebase/firestore";
import { db } from '../firebase/firebase.utils';
import { useScheduleData } from './hooks/schedules';
import Paper from '@mui/material/Paper';
import Navbar from './Navbar';
import '../pages/Navbar.css';
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  AllDayPanel,
  DragDropProvider
} from '@devexpress/dx-react-scheduler-material-ui';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import { BinarySearch } from '../algorithms';

function Schedule() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const main = async () => {
      const date = new Date();
      date.setDate(date.getDate() - (date.getDay() || 7))
      const weekFromNow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 6)
      const q = query(collection(db, "events"),  where("startDate", ">=", date), where("startDate", "<", weekFromNow))
      const querySnapshot = await getDocs(q);
      const v = querySnapshot.docs.map((doc) => doc.data());
      v.map((item) => {
        item.startDate = item.startDate.toDate();
        item.endDate = item.endDate.toDate();
      })
      setData(v);
      console.log("DAATA", data)

    }
    main();
  }, [])

  const saveAppointment = async ({added, changed, deleted}) => {
    console.log("DATA", added, changed, deleted)
    const randomString = (Math.random() + 1).toString(36).substring(7);
    let local = JSON.parse(JSON.stringify(data));
    if(added) {
      console.log('appt saved');
      const toAdd = {
        id: randomString,
        ...added
      }
      local.push(toAdd);
      setData(local);
      await setDoc(doc(db, "events", randomString), toAdd);

    } else if(changed) {
      console.log('appt changed');
      console.log(Object.keys(changed)[0])
      const id = data.findIndex((appt) => appt.id === Object.keys(changed)[0]);
      console.log(id)
      const toChange = {
        ...local[id],
        ...changed[Object.keys(changed)[0]]
      }
      local[id] = toChange;
      setData(local);
      await updateDoc(doc(db, "events", Object.keys(changed)[0]), toChange);
    } else if(deleted) {
      const id = data.findIndex((appt) => appt.id === deleted);
      local.splice(id, 1);
      setData(local);
      await deleteDoc(doc(db, "events", deleted));
    }
  }
  return (
    <div>
      <div className="navbar1"></div>
      <Navbar />
      <img src={require('../media/logo.png')} className="logo_sched"></img>
      <h1 className="title"> Weekly Schedule </h1>
      <h1 className="title2"> Double Click on the Schedule to Add Appointment </h1>
      <h1 className="title2">  </h1>
      <div className="schedule_box">
      <Paper>
        <Scheduler data={data}>
          <ViewState 
            currentDate={new Date()}
          />
          <EditingState
            onCommitChanges={(data) => {
              saveAppointment(data)
            }}
          />
          <IntegratedEditing />
          <WeekView startDayHour={9} endDayHour={19} />
          <Appointments />
          <AppointmentTooltip showOpenButton showDeleteButton />
          <AllDayPanel />
          <DragDropProvider 
            allowDrag={(data) => {
              console.log(data)
              return true;
            }}
          />
          <AppointmentForm />
        </Scheduler>
      </Paper>
      </div>
    </div>
  );
}

export default Schedule;