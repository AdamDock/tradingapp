import React, {Component} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import styles from '@/styles/Home.module.css'

class Calendar extends Component{
    render() {
        return ( 
        <div className={styles.calendar1}>
        <div className="calendar">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={[
            // Define your events here
            {
              title: 'Event 1',
              date: '2023-10-15',
            },
            {
              title: 'Event 2',
              date: '2023-10-20',
            },
          ]}
        />
      </div>
      </div>
      );
    }
}

export default Calendar;