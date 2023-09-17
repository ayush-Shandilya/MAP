import React, { useState, useEffect } from "react";

const TimeNabBar = () => {
  const locale = "en";
  const [today, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 10 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const day = today.toLocaleDateString(locale, {
    weekday: "long",
    year: "numeric",
  });
  const date = `${day},${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "short",
  })}\n\n`;
  const hour = today.getHours();
  const wish = `Good ${
    (hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Evening"
  } `;
  const time = today.toLocaleTimeString("en", { timeStyle: "short" });
  // console.log("render navbar");
  return (
    <div className="row1">
      <h1 className="time">{time}</h1>
      <p>
        <span className="date  grey-text">{date} </span>
      </p>
      <p className="wish grey-text">{wish}</p>
    </div>
  );
};

export default TimeNabBar;
