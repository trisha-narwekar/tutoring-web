import '../pages/Schedule.css';
import React, { useEffect, useState } from 'react';
import '../pages/Navbar.css';
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView, Appointments, AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';
import { db } from '../firebase/firebase.utils';
import { useScheduleData } from './hooks/schedules';

const schedulerData = [
  { startDate: '2022-11-9T011:00', endDate: '2022-11-9T112:00', title: 'hello' },
  { startDate: '2022-11-10T012:00', endDate: '2022-11-10T113:00', title: 'gym' },
];

const saveAppointment = async (data) => {
  console.log('appt saved');
  console.log(data);
  // Use setDoc to write to the database
  const randomString = (Math.random() + 1).toString(36).substring(7);
  await setDoc(doc(db, "events", randomString), {
    ...data.added,
    id: randomString
  })
}
function Schedule() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const main = async () => {
      const date = new Date();
      date.setDate(date.getDate() - (date.getDay() || 7))
      const weekFromNow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 6)
      console.log("first date", date.toDateString(), " ", date.getDay())
      console.log("date", weekFromNow.toDateString(), " ", weekFromNow.getDay())
      const q = query(collection(db, "events"),  where("startDate", ">=", date), where("startDate", "<", weekFromNow))
      const querySnapshot = await getDocs(q);
      const v = querySnapshot.docs.map((doc) => doc.data());
      console.log(v)
      setData(v);
      console.log("DAATA", data)
    }
    main();
  }, [])
  return (
    <div>
      <div className="navbar1"></div>
      <Scheduler data={data}>
        <ViewState />
        <EditingState onCommitChanges={saveAppointment} />
        <IntegratedEditing />
        <WeekView startDayHour={11} endDayHour={19} />
        <Appointments />
        <AppointmentForm />
      </Scheduler>
    </div>
  );
}

export default Schedule;