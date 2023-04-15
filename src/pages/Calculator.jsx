import React, { useState } from 'react';


function CalCulator() {
  const [hourlyRate, setHourlyRate] = useState("");
  const [timeUsed, setTimeUsed] = useState("");

  const calculatePrice = () => {
    let time = timeUsed.split(':');
    let hours = parseInt(time[0]);
    let minutes = parseInt(time[1]);
    let totalTime = hours + minutes / 60;
    let price = hourlyRate * totalTime;
    return isNaN(price) ? 0 : price.toFixed(2);
  }

  const handleChangeTime = (e) => {
    let value = e.target.value;
    if (value.length === 1) {
      value += ":";
    }
    setTimeUsed(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="container">
      <h1>VOLTAGAME</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="hourlyRate">نرخ ساعتی</label>
          <input type="number" id="hourlyRate" placeholder="لطفا قیمت را بر حسب ساعت وارد نمایید" value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="timeUsed">زمان</label>
          <input type="text" id="timeUsed" placeholder="H:MM" value={timeUsed} onChange={handleChangeTime} />
        </div>
        <div className="input-group">
          <label htmlFor="price">قیمت کل</label>
          <input type="text" id="price" placeholder="Price" value={`${calculatePrice()} تومان`} readOnly />
        </div>
        <button className='reset-button' type="button" onClick={() => {
  setHourlyRate("");
  setTimeUsed("");
}}>Reset</button>
      </form>
    </div>
  );
}

export default CalCulator;
