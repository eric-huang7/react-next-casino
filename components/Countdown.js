import React, { useEffect, useState } from "react";

const Countdown = ({ deadline }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)) || 0);
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24) || 0);
      setMinutes(Math.floor((time / 1000 / 60) % 60) || 0);
      setSeconds(Math.floor((time / 1000) % 60) || 0);
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  return (
      <div>{days ? days + ':' : ''}{leading0(hours)}:{leading0(minutes)}:{leading0(seconds)}</div>
  );
};

export default Countdown;
