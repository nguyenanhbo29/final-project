import { IconClock } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function CountdownTimer({ initialSeconds = 60 }) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    if (secondsLeft === 0) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="text-xl font-bold text-red-600 flex gap-2 items-center">
      <IconClock />
      <div>{formatTime(secondsLeft)}</div>
    </div>
  );
}
