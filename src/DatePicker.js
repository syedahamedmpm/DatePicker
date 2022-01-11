import React,{useState} from "react";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

function DatePick() {
  const [startDate, setDate] = React.useState(new Date)
  const today = new Date()

  const selectDateHandler = (d) => {
    setDate(d)
  }
  return (
    <div className="App">
      <DatePicker
        dateFormat="yyyy/MM/dd"
        selected={startDate}
        onChange={selectDateHandler} 
        minDate={today}
        todayButton={"Today"}/>
    </div>
  );
}

export default DatePick;
