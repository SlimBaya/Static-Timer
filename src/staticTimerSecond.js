import React, { Component } from 'react';
import './staticTimerSecond.css' 

class StaticTimerSecond extends Component {
    render(){
        return( <div className="TimerSecond">
        <h1 className="Numbers"> 00 </h1> 
        <p className="Description"> Second </p>
      </div>);
    }
}
export default StaticTimerSecond;