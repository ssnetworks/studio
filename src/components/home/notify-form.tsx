'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const NotifyForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  const handleNotify = () => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) {
      setMessage('Please enter a valid email.');
      setMessageColor('text-red-400');
      return;
    }
    setMessage(`Thanks — we'll notify ${email} when STRIKE launches.`);
    setMessageColor('text-cyan-300'); // Corresponds to #bff6f6 from the CSS
    setEmail('');
  };

  return (
    <>
      <div className="flex justify-center gap-2 items-center flex-wrap">
        <Input
          id="notifyEmail"
          type="email"
          placeholder="Enter your email to get notified"
          aria-label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-w-[240px] !bg-white/5 border-primary/20 placeholder:text-muted-foreground focus:!bg-transparent"
        />
        <Button id="notifyBtn" onClick={handleNotify} className="font-bold text-base bg-primary text-primary-foreground hover:bg-primary/90">Notify Me</Button>
      </div>
      {message && (
        <div id="notifyMsg" className={`w-full text-center mt-2.5 ${messageColor}`}>
          {message}
        </div>
      )}
    </>
  );
};

export default NotifyForm;
