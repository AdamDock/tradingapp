import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Chart from "../atoms/chart";

const ChartAccordian = ({name, description, currentValue, data, unit}) => {
    console.log(data);

    return (
        <>
        <Accordion className="bg-hover-color rounded outline m-10">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>{name}</Typography>
            
        </AccordionSummary>
        <AccordionDetails>
        <Typography>The current price of {name} is {currentValue} {unit}</Typography>
        <Chart data={data}/>
          <Typography>
           {description}
          </Typography>
        </AccordionDetails>
      </Accordion>
        </>
    )
}
export default ChartAccordian;