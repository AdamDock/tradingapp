import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import styles from "@/styles/Home.module.css";

const Calendar = () => {
  const [marketData, setMarketData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const apiKey = "b0AH09IUEVj7kFEwAWsmPj4qxCecNX94";
        const endpoint = `https://api.polygon.io/v1/marketstatus/upcoming?apiKey=${apiKey}`;

        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }

        const data = await response.json();
        setMarketData(transformData(data));
      } catch (error) {
        setError(`Error: ${error.message}`);
      }
    };

    fetchMarketData();
  }, []); // The empty dependency array ensures this effect runs only once on mount

  const transformData = (data) => {
    
    return data.map((item) => ({
      title: `${item.name}-${item.exchange}-${item.status}`,
      date: item.date,
    }));
  };

  return (
    <div className={styles.calendar1}>
      <div>
        {marketData ? (
          <div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <div className="calendar">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={marketData || []} // Use marketData as events, or an empty array if it's still loading
        />
      </div>
    </div>
  );
};

export default Calendar;
