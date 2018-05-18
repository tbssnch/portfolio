import React, { Component } from 'react';
import './Work.css';

class Work extends Component {
  render() {
    return (
          <div className="ProjectContainer">
            <div className="Project"><a href="https://iband-aid.firebaseapp.com/"><h1>A RECORD COLLECTION MANAGEMENT APPLICATION BUILT USING ANGULAR 2, FIREBASE, AND UTILIZES API CALLS FROM DISCOGS AND BANDSINTOWN</h1></a><span className="Hover"><p>BANDAID</p></span></div>
            <div className="Project"><a href="https://tbssnch.github.io/react-tap-list/"><h1>AN APPLICATION FOR TAP ROOMS TO KEEP TRACK OF THEIR INVENTORY BUILT USING REACT.JS</h1></a><span className="Hover"><p>TAP ROOM</p></span></div>
            <div className="Project"><a href="https://tbssnch.github.io/timbers-army-layout"><h1>AN UNOFFICIAL RECONSTRUCTION OF THE TIMBERS ARMY MAIN PAGE BUILT USING SASS</h1></a><span className="Hover"><p>TIMBERS ARMY</p></span></div>
          </div>
    );
  }
}

export default Work;