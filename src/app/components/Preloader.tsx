"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // start fading out
      setTimeout(() => setLoading(false), 800); // wait for fade-out to finish before removing
    }, 2000); // show for 2s

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-white z-50 transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo */}
      <img src="/mainlogo.png" alt="Logo" className="h-24 animate-bounce" />

      {/* Loading dots */}
      <div className="flex space-x-2 mt-6">
        <span className="w-3 h-3 bg-gray-700 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-3 h-3 bg-gray-700 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-3 h-3 bg-gray-700 rounded-full animate-bounce"></span>
      </div>
    </div>
  );
}
