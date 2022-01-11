import React,{useState} from "react";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

class DatePi extends React.Component {
	constructor(){
		super()
		this.state={
			startDate:new Date,
			today:new Date()
		}
	}

  selectDateHandler = (e) => {
	  console.log(e)
	  this.setState({
		  startDate:e
	  })
  }
  render(){
	return (
    <div className="App">
      <DatePicker
        dateFormat="yyyy/MM/dd"
        selected={this.state.startDate}
        onChange={this.selectDateHandler} 
        minDate={this.state.today}
        todayButton={"Today"}/>
    </div>
  );  
  }
}

export default DatePi;
