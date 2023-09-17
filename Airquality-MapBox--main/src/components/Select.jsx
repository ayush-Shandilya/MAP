import React from "react";
import Options from "./Options";
import { centroids } from "./latlong";
import { useDispatch, useSelector } from "react-redux";

const Select = () => {
  const dispatch = useDispatch();

  const stateAvgFinalList = useSelector(
    (state) => state.custom.stateAvgFinalList
  );
  const countryAvgFinal = useSelector((state) => state.custom.countryAvgFinal);
  const statelist = useSelector((state) => state.custom.statelist);

  const latlongFunc = (e) => {
    let str = e.target.value;
    console.log(e.target.value);
    str = str.split(",");

    return str;
  };

  const setlatlongFunc = (latlong) => {
    dispatch({
      type: "latlongReducer",
      payload: latlong,
    });
  };

  const setzoom = (e) => {
    if (e.target.options[window.event.target.selectedIndex].text === "India") {
      setzoomFunc(4);
    } else {
      setzoomFunc(7);
    }
  };

  const setzoomFunc = (zoom) => {
    dispatch({
      type: "zoomReducer",
      payload: zoom,
    });
  };

  const setAvg = (e) => {
    if (
      statelist.includes(
        e.target.options[window.event.target.selectedIndex].text
      )
    ) {
      for (let index = 0; index < stateAvgFinalList.length; index++) {
        if (
          e.target.options[window.event.target.selectedIndex].text ==
          Object.keys(stateAvgFinalList[index])
        ) {
          dispatch({
            type: "avgReducer",
            payload: parseInt(Object.values(stateAvgFinalList[index])),
          });
          console.log(stateAvgFinalList[index]);
        }
      }
    } else {
      if (e.target.options[window.event.target.selectedIndex].text == "India") {
        dispatch({
          type: "avgReducer",
          payload: parseInt(countryAvgFinal),
        });
        console.log(countryAvgFinal);
      } else {
        dispatch({
          type: "avgReducer",
          payload: "No Data",
        });
        console.log("no data");
      }
    }
  };

  // console.log("render select");

  return (
    <div className="select-el">
      <select
        name="State"
        id="city"
        onChange={(e) => {
          setlatlongFunc(latlongFunc(e));
          setzoom(e);
          setAvg(e);
        }}
      >
        {centroids.map((station) => {
          return (
            <Options
              key={station["State"]}
              station_name={station["State"]}
              lat={station["Latitude"]}
              long={station["Longitude"]}
            />
          );
        })}
      </select>
    </div>
  );
};
export default Select;
