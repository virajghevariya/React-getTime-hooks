import React, { useState } from "react";

const App = () => {
  let localTime = new Date().toLocaleTimeString();

  const [time, timeState] = useState(localTime);

  const TimeDisplay = () => {
    localTime = new Date().toLocaleTimeString();
    timeState(localTime);
  };

  setInterval(TimeDisplay, 1000);
  return (
    <>
      <div className="time_div">
        <h1> {time} </h1>
      </div>
    </>
  );
};

export default App;
