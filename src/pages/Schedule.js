import '../pages/Schedule.css';
import React, { useEffect, useState } from 'react';
import '../pages/Navbar.css';
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from '../firebase/firebase.utils';
import { PopupWidget } from "react-calendly";

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
  const currentDate = '2022-11-30';
const schedulerData = [
  { startDate: '2022-11-30T09:45', endDate: '2022-11-30T11:00', title: 'Meeting' },
];

  return (
    <div>
      <div className="navbar1"></div>
      <div className="App">
      <PopupWidget
        url="https://calendly.com/aplus_tutoring"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#00a2ff"
      />
    </div>
    </div>
  );
}

export default Schedule;