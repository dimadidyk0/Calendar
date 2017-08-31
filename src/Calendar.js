import React, { Component } from 'react';
import './Calendar.css';
import Day from './Day';

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false
    };
  }
  
  render() {
    

    let props = this.props.data;
    return (
      <div className="calendar">
        <div className="calendar__scale">
          <div className="calendar__all">All day</div>
          <ul className="calendar__points">
            <li>00:00</li>
            <li>03:00</li>
            <li>06:00</li>
            <li>09:00</li>
            <li>12:00</li>
            <li>15:00</li>
            <li>18:00</li>
            <li>21:00</li>
          </ul>
        </div>
        <ul className="calendar__main">
          
          {
            Object.keys(props).map(i => {
              return <Day 
                key={i} 
                day={i} 
                data={
                  props[i].map(y => {
                    let arr = [];
                    arr[0] = y['bt']/60;
                    arr[1]= (++y['et'])/60;
                    return arr;
                  })
                }
              ></Day>
            })
          }
        </ul>
        <div className="calendar__buttons">
          
        </div>
      </div>
    );
  }
}

export default Calendar;
