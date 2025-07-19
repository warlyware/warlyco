'use client';
import { useState, useEffect } from "react";

export default function OverlayLayout({ children }) {
  const [showing, setShowing] = useState(true);

  // Trick: When children becomes null, don't hide instantly—delay for animation
  useEffect(() => {
    if (!children && showing) {
      // If the overlay route has just been removed
      setTimeout(() => setShowing(false), 500); // match your animation length
    }
    if (children && !showing) {
      setShowing(true);
    }
  }, [children, showing]);

  if (!showing) return null; // Now it will linger for 500ms after route change
  return children;
}
