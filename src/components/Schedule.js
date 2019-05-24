import React from "react";

const Schedule = () => (
  <div>
    <div className="weekCalendar">
      <div className="day day1">
        <div className="title">Sun</div>
      </div>
      <div className="day day2">
        <div className="title">Mon</div>
        <div className="day2Content">
          <div className="dayItem">
            <strong>8:00</strong> Breakfast
          </div>
          <div className="dayItem">
            <strong>8:45</strong> Reading
          </div>
          <div className="dayItem">
            <strong>9:30</strong> Math
          </div>
        </div>
      </div>
      <div className="day day3">
        <div className="title">Tue</div>
      </div>
      <div className="day day4">
        <div className="title">Wed</div>
      </div>
      <div className="day day5">
        <div className="title">Thu</div>
      </div>
      <div className="day day6">
        <div className="title">Fri</div>
      </div>
      <div className="day day7">
        <div className="title">Sat</div>
      </div>
    </div>
  </div>
);

export default Schedule;
