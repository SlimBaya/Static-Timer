import React, { Component } from 'react';
import './staticTimerHour.css' 

class StaticTimerHour extends Component {
    render(){
        return( <div className="TimerHour">
        <h1 className="Numbers"> 00: </h1> 
        <p className="Description"> Hour </p>
      </div>);
    }
}
export default StaticTimerHour;