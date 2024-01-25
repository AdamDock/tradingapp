import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import styles from "@/styles/Home.module.css";
import axios from "axios";
//Rest of imports for material UI
import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import ListSubheader from "@mui/material/ListSubheader";
import Autocomplete from  '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';




function getStyles(name: string, stockName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      stockName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


const Calendar = () => {
  const [marketData, setMarketData] = useState(null);
  const [earningsData, setEarningsData] = useState(null);
  const [earnings, setEarnings] = useState(null);
  const [earningsCal, setEarningsCal] = useState(null);
  const theme = useTheme();
  const [stockName, setStockName] = React.useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const {
      target: { value },
    } = event;
    setStockName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEarningsData = async () => {
      try {
        const res = await axios(`/api/earningscal`);
        const data = await res.data;
        console.log(data); 
        const groupedEarnings = data.reduce((groups, item) => {
          const group = (groups[item.Sector] || []);
          group.push(item);
          groups[item.Sector] = group;
          return groups;
        }, {});
        console.log(groupedEarnings);
        setEarnings(groupedEarnings);
        setEarningsData(data);
        setEarningsCal(transformEarningsData(data));
        
    }
    catch(err){
        console.log(err);
        console.log('error');
          }
    }
    const fetchMarketData = async () => {
      try {
        const res = await axios(`/api/marketStatus`);
        const data = await res.data;
        console.log(data); 
        setMarketData(transformData(data));
        
    }
    catch(err){
        console.log(err);
        console.log('error');
          }
    };

    fetchMarketData();
    fetchEarningsData();
  }, []);
  useEffect (() => {
    console.log(stockName);
    console.log(earningsData);
    setEarningsCal(transformEarningsData(earningsData));
  }, [earningsData, stockName]);
  useEffect (() => {
    console.log(earningsCal);
  }, [earningsCal]);
  const transformEarningsData = (data: any) => {
    if (!data) {
      return [];
    }
    
    const selectedStocks = stockName.map((item) => item.name);
  
    return data
      .filter((item: any) => selectedStocks.length === 0 || selectedStocks.includes(item.name))
      .flatMap((item: any) =>
        item.earningsDate ? item.earningsDate.map((date: string) => ({
          title: `${item.symbol} - ${item.name}`,
          date: date,
          color: "green",
          status: "Earnings report"
        })) : []
      );
  };
  const transformData = (data: any) => {
    
    return data.map((item: any) => ({
      title: `${item.name}-${item.exchange}-${item.status}`,
      date: item.date,
      color: "red"
     
    }));
  };

  return (
    <div className={styles.calendar1}>

<FormControl sx={{ m: 1, width: '100%' }}>
  <Autocomplete
    multiple
    id="grouped-demo"
    options={Object.values(earnings || {}).flat()}    groupBy={(option) => option.Sector}
    getOptionLabel={(option) => option.name}
    defaultValue={[]}
    renderInput={(params) => (
      <TextField {...params} label="Stocks" variant="outlined" />
    )}
    renderOption={(props, option) => <li {...props}>{option.name}</li>}
    onChange={(event, newValue) => {
      setStockName(newValue);
    }}
  />
</FormControl>
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
          events={[...(marketData||[]), ...(earningsCal||[])]|| []} // Use marketData as events, or an empty array if it's still loading
          eventDidMount={info => {
            const title = `${info.event.title} - ${info.event.extendedProps.status}`;
            info.el.setAttribute('title', title);
          }}
        />
      </div>
    </div>
  );
};

export default Calendar;
