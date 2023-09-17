import React from "react";
import Select from "./Select";
import TimeNabBar from "./TimeNabBar";
// import {useSelector} from 'react-redux'

const NavBar = () => {
  // const avg = useSelector(state=>state.custom.avg)

  return (
    <div className="nav">
      <div className="nav-main">
        <TimeNabBar />
        <hr />
        <div className="row2">
          <div>
            {/* <h2 className="h2">PM10 Average Value</h2> */}
            <Select />
            {/* <h1>{avg}</h1> */}
          </div>
        </div>
        <hr />
      </div>
      <div className="row3">
        <h1 className="color-code">
          <span className="c">C</span>
          <span className="lower-letters o">o</span>
          <span className="lower-letters l">l</span>
          <span className="lower-letters o">o</span>
          <span className="lower-letters r">r</span>
          <span>-</span>
          <span className="c">c</span>
          <span className="lower-letters o">o</span>
          <span className="lower-letters d">d</span>
          <span className="lower-letters e">e</span>
        </h1>
        <ul className="color-unordered-list">
          <li className="color-li-el green-li-el grey-text">
            <span className="range range-green">0 to 50</span> |
            <span className="color-msg"> Good</span>
          </li>
          <li className="color-li-el yellow-li-el grey-text">
            <span className="range range-yellow">51 to 100</span> |
            <span className="color-msg"> Moderate</span>
          </li>
          <li className="color-li-el orange-li-el grey-text">
            <span className="range range-orange">101 to 150</span> |
            <span className="color-msg"> Unhealthy for Sensitive Group</span>
          </li>
          <li className="color-li-el red-li-el grey-text">
            <span className="range range-red">151 to 200</span> |
            <span className="color-msg"> Unhealthy</span>
          </li>
          <li className="color-li-el purple-li-el grey-text">
            <span className="range range-purple">201 to 300</span> |
            <span className="color-msg"> Very Unhealthy</span>
          </li>
          <li className="color-li-el brown-li-el grey-text">
            <span className="range range-brown">Above 300</span> |
            <span className="color-msg"> Hazardous</span>
          </li>
          <li className="color-li-el white-li-el grey-text">
            <span className="range range-white">NaN</span> |
            <span className="color-msg"> Data Not Available</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
