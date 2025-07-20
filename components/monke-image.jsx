'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function MonkeImage() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start animation after delay, but always keep the image in the DOM
    const timeout = setTimeout(() => setAnimate(true), 0); // or 0/100/etc for your timing
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Image
      src="/images/smb3-9677-transparent.png"
      alt="SMB3 #9677"
      width={800}
      height={800}
      className={
        "absolute bottom-0 max-w-full max-h-full" +
        (animate
          ? "opacity-100 translate-y-0 animate-slide-up"
          : "opacity-0 translate-y-full pointer-events-none")
      }
    // no need for style prop, animation-delay is in CSS
    />
  );
}
