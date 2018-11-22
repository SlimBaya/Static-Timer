import React, { Component } from 'react';
import './staticTimerHour.css' 

class StaticTimerMinute extends Component {
    render(){
        return( <div className="TimerMinute">
        <h1 className="Numbers">  30: </h1>
        <p className="Description"> Minute </p>
      </div>);
    }
}
export default StaticTimerMinute;