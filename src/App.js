import React, { Component } from 'react'
import './App.css'
import StaticTimerHour from './staticTimerHour'
import StaticTimerMinute from './StaticTimerMinute'
import StaticTimerSecond from './staticTimerSecond'

class App extends Component {
  render() {

      return (<div className="Timer"> <StaticTimerHour />  <StaticTimerMinute /> <StaticTimerSecond/>
     
      </div> ); 


  }
}

export default App;
