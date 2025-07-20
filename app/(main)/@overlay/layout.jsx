'use client';
import { useState, useEffect } from "react";

export default function OverlayLayout({ children }) {
  const [showing, setShowing] = useState(true);

  useEffect(() => {
    if (!children && showing) {
      setTimeout(() => setShowing(false), 0);
    }
    if (children && !showing) {
      setShowing(true);
    }
  }, [children, showing]);

  if (!showing) return null;
  return children;
}
