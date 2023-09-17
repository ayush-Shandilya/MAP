import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import Loading from "./Loading";
import { exampledata } from "./latlong";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

export default function Map() {
  // const dispatch = useDispatch();
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOOX_ACCESS_TOKEN;
  const data = useSelector((state) => state.custom.data);
  const isLoading = useSelector((state) => state.custom.isLoading);
  const latlong = useSelector((state) => state.custom.latlong);
  const zoom = useSelector((state) => state.custom.zoom);
  const mapContainer = useRef(null);
  const mapHtml = useRef(null);

  useEffect(() => {
    mapHtml.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: import.meta.env.VITE_MAPBOX_STYLE,
      center: [78.9629, 20.5937],
      zoom: 4,
    });

    // get data from server

    // add markers to map
    if (data !== null) {
      for (let parameter of data) {
        // }
        // data.forEach(function (parameter) {
        var el = document.createElement("section");
        let date = new Date(parameter.station.time);
        let dt = `${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()}`;
        let tm = `${
          date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
        }:${
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
        }`;
        var value = 0;
        try {
          if (parameter.station.name.includes("India")) {
            value = parseInt(parameter.aqi);
            if (value <= 50) {
              el.className = "marker-green";
            } else if (value >= 51 && value <= 100) {
              el.className = "marker-yellow";
            } else if (value >= 101 && value <= 150) {
              el.className = "marker-orange";
            } else if (value >= 151 && value <= 200) {
              el.className = "marker-red";
            } else if (value >= 201 && value <= 300) {
              el.className = "marker-purple";
            } else if (value >= 301) {
              el.className = "marker-brown";
            } else {
              el.className = "marker-white";
            }
          }
        } catch (err) {
          continue;
        }
        new mapboxgl.Marker(el)
          .setLngLat([parameter["lon"], parameter["lat"]])
          .addTo(mapHtml.current)
          .setPopup(
            new mapboxgl.Popup({ offset: 5 }).setHTML(
              "<h6>" +
                parameter["station"]["name"] +
                '</h6><p classname="value">' +
                value +
                "</p>" +
                `<p>${tm + " " + dt}</p>`
            )
          );
      }
    } else {
      console.log("Running exampleData");
      for (let parameter of exampledata) {
        // }
        // data.forEach(function (parameter) {
        var el = document.createElement("section");
        var value = 0;
        let date = new Date(parameter.station.time);
        let dt = `${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()}`;
        let tm = `${
          date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
        }:${
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
        }`;
        try {
          if (parameter.station.name.includes("India")) {
            value = parseInt(parameter.aqi);
            if (value <= 50) {
              el.className = "marker-green";
            } else if (value >= 51 && value <= 100) {
              el.className = "marker-yellow";
            } else if (value >= 101 && value <= 150) {
              el.className = "marker-orange";
            } else if (value >= 151 && value <= 200) {
              el.className = "marker-red";
            } else if (value >= 201 && value <= 300) {
              el.className = "marker-purple";
            } else if (value >= 301) {
              el.className = "marker-brown";
            } else {
              el.className = "marker-white";
            }
          }
        } catch (err) {
          continue;
        }
        new mapboxgl.Marker(el)
          .setLngLat([parameter["lon"], parameter["lat"]])
          .addTo(mapHtml.current)
          .setPopup(
            new mapboxgl.Popup({ offset: 5 }).setHTML(
              "<h6>" +
                parameter["station"]["name"] +
                '</h6><p classname="value">' +
                value +
                "</p>" +
                `<p>${tm + " " + dt}</p>`
            )
          );
      }
    }

    // cleanup function
  }, [data]);
  useEffect(() => {
    mapHtml.current.flyTo({
      center: latlong,
      essential: true,
      zoom: zoom,
    });
  });
  return (
    <>
      <div ref={mapContainer} className="map" />
    </>
  );
}
