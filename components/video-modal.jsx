import { XCircleIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

export default function VideoModal({ isOpen, onClose, video }) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onClose();
      setIsAnimating(false);
    }, 500);
  };

  if (!isOpen && !isAnimating) {
    return null;
  }

  return (
    <div className={`fixed inset-0 bg-black/70 z-50 ${isAnimating ? 'animate-fade-out' : 'animate-fade-in'}`}>
      <div className="flex items-center justify-center h-full">
        <video
          src={video.url}
          autoPlay
          loop
          muted
          controls
          className="w-full h-full object-contain p-4"
        />
      </div>

      <button
        onClick={handleClose}
        className="fixed top-2 right-4 text-gray-100 z-50 bg-black/50 rounded-full hover:text-pink-500 transition-all duration-300"
      >
        <XCircleIcon className="w-10 h-10" />
      </button>
    </div>
  );
}