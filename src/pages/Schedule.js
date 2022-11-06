import '../pages/Schedule.css';
import React from 'react';
import '../pages/Navbar.css';
import {Calendar, dateFnsLocalizer} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";

const locales = {
    "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2022, 10, 0),
        end: new Date(2022, 10, 0),
    },
    {
        title: "Vacation",
        start: new Date(2022, 10, 7),
        end: new Date(2022, 10, 10),
    },
    {
        title: "Conference",
        start: new Date(2022, 10, 20),
        end: new Date(2022, 10, 23),
    },
];

function Schedule() {
  return (
    <div>
    <div className="navbar1"></div>
    <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{height: 500, margin: "50px"}}/>
    </div>
  );
}

export default Schedule;