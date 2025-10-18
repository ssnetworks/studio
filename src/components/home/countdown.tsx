'use client';

import { useState, useEffect } from 'react';

const TimeCard = ({ value, label }: { value: string; label: string }) => (
  <div className="min-w-[88px] p-3 rounded-xl bg-white/5 border border-primary/10 text-center shadow-[0_10px_30px_rgba(255,59,59,0.04)]">
    <div className="text-[1.6rem] font-extrabold text-primary">{value}</div>
    <div className="text-sm text-muted-foreground mt-1.5">{label}</div>
  </div>
);

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const targetDate = new Date("2025-10-13T19:00:00+05:30");
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        if (timer) clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      const pad = (n: number) => (n < 10 ? '0' + n : n.toString());

      setTimeLeft({
        days: pad(days),
        hours: pad(hours),
        minutes: pad(minutes),
        seconds: pad(seconds),
      });
    }

    updateCountdown();
    timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-3.5 justify-center flex-wrap mb-3" role="timer" aria-atomic="true">
      <TimeCard value={timeLeft.days} label="Days" />
      <TimeCard value={timeLeft.hours} label="Hours" />
      <TimeCard value={timeLeft.minutes} label="Minutes" />
      <TimeCard value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default Countdown;
