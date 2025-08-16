"use client";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRef, useEffect, useState } from "react";
import { CPCproducts, CPCImages } from "@/app/_data/constants";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Typography } from "@mui/material";

export default function Home() {
  const [show, setShow] = useState(false);
  const barRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, []);

  // Intro fade-in effect
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Carousel animation CSS injection
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .marquee-container {
        overflow: hidden;
        position: relative;
        background: #fff;
        width: 100%;
        height: 80px; /* taller for bigger text */
        display: flex;
        align-items: center;
      }
      .marquee-track {
        display: flex;
        align-items: center;
        gap: 48px;
        white-space: nowrap;
        animation: carousel 18s linear infinite;
      }
      @keyframes carousel {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      {/* Hero section with video */}
      <div className="relative w-full h-screen flex items-center justify-center bg-black">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/cpcVid.mp4"
          autoPlay
          loop
          muted
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-6">
          <span
            className={`text-white text-2xl md:text-4xl lg:text-[50px] text-center leading-10 md:leading-15 font-bold transition-all duration-1000 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Transform Your Windows. <br /> Transform Your Home.
          </span>
          <span className="bg-white w-[200px] md:w-[300px] lg:w-[400px] h-[1px]"></span>
          <p
            className={`text-white text-[12px] md:text-base font-medium text-center transition-all duration-1000 delay-200 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Stylish, custom blinds that bring comfort, privacy,
            <br />
            and elegance to every room.
          </p>
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              fontWeight: 600,
              borderRadius: 100,
              backgroundColor: "#967F5D",
              textTransform: "none",
              display: "flex",
              alignItems: "center",
              gap: 2,
              boxSizing: "border-box",
            }}
            className="explore-btn"
          >
            <span style={{ marginRight: 8, fontSize: "inherit" }}>Explore</span>
            <span
              className="arrow-circle"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 24,
                height: 24,
                borderRadius: "50%",
                background: "#fff",
              }}
            >
              <ArrowForwardIcon style={{ color: "#967F5D" }} />
            </span>
          </Button>
        </div>
      </div>

      <div className="marquee-container">
        <div className="marquee-track">
          {[...CPCproducts, ...CPCproducts].map((product, index, arr) => (
            <span key={index} style={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1.5rem", sm: "1.5rem", md: "1.8rem" },
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {product}
              </Typography>
              {index < arr.length - 1 && (
                <FiberManualRecordIcon sx={{ fontSize: 10, mx: 2 }} />
              )}
            </span>
          ))}
        </div>
      </div>

      <div className=""></div>

      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center gap-4 mt-8">
          <span
            ref={barRef}
            className="bg-black h-[12px] rounded-full transition-transform duration-700 ease-out origin-center"
            style={{
              width: "clamp(120px, 25vw, 170px)",
              transform: visible ? "scaleX(1)" : "scaleX(0)",
            }}
          ></span>

          <span className="text-black text-base md:text-2xl lg:text-5xl text-center leading-7 md:leading-14">
            Window blinds, crafted with care <br /> and designed for light and
            life.
          </span>
          <p
            className={`text-black text-[12px] md:text-base font-medium text-center transition-all duration-1000 delay-200 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Our window blinds blend timeless design with everyday function,
            giving you
            <br />
            control over light, privacy, and ambiance in any space
          </p>
        </div>
      </div>

      <div className="flex gap-6 mt-8 overflow-x-auto">
        {CPCImages.map((item, index) => (
          <div
            key={index}
            className="relative flex cursor-pointer  flex-col items-center min-w-[200px] group overflow-hidden rounded-[20px]"
          >
            <img
              src={item.image}
              alt={item.productName}
              className="w-full h-[600px] object-cover rounded-[20px] shadow-md 
                   transition-transform duration-500 ease-in-out group-hover:scale-120"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>

            {/* Centered vertical text */}
            <span
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   text-white text-[25px] md:text-[20pxx] font-bold underline"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              {item.productName}
            </span>
          </div>
        ))}
      </div>

      <div className="w-full max-w-[1980px] mx-auto">
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center gap-4 mt-8">
            <span
              ref={barRef}
              className="bg-black h-[12px] rounded-full transition-transform duration-700 ease-out origin-center"
              style={{
                width: "clamp(120px, 25vw, 170px)",
                transform: visible ? "scaleX(1)" : "scaleX(0)",
              }}
            ></span>

            <span className="text-black text-base md:text-2xl lg:text-5xl text-center leading-7 md:leading-14">
              Inspiration Gallery
            </span>
            <p
              className={`text-black text-[12px] md:text-base font-medium text-center transition-all duration-1000 delay-200 ${
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Discover how our window blinds transform spaces with style and
              <br />
              elegance in our Inspiration Gallery
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
