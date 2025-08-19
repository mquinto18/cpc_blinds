"use client";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRef, useEffect, useState } from "react";
import { Person, Star } from "@mui/icons-material";
import { Box } from "@mui/material";
import ContactInfo from "../components/ui/contactInfo";
import { useRouter } from "next/navigation";
import Footer from "../components/ui/Footer";

import {
  CPCproducts,
  CPCImages,
  combiBlinds,
  combiBlindsDetails,
  RollerBlinds,
  FabriccurtainSheer,
  VenetianBlinds,
  VerticalBlinds,
  WoodenBlinds,
  AccordionFoldingDoors,
  rollerBlindsImg,
  curtainsBlindsImg,
  venetianBlindsImg,
  verticalBlindsImg,
  woodenBlindsImg,
  accordionBlindsImg,
  recentProducts,
} from "@/app/_data/constants";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Typography } from "@mui/material";
import Navbar from "@/app/components/ui/Navbar";

export default function Home() {
  const [show, setShow] = useState(false);
  const barRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const router = useRouter();

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
        <div className="absolute top-0 left-0 w-full z-20">
          <Navbar />
        </div>
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
            className="relative flex cursor-pointer flex-col items-center 
                 min-w-[200px] w-[300px] h-[600px] group overflow-hidden 
                 rounded-[20px] shadow-md"
          >
            <img
              src={item.image}
              alt={item.productName}
              className="w-full h-full object-cover rounded-[20px] transition-transform 
                   duration-500 ease-in-out group-hover:scale-110"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>

            {/* Centered vertical text */}
            <span
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   text-white text-[25px] md:text-[20px] font-bold underline"
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

      <div id="products" className="w-full max-w-[1980px] mx-auto">
        <div className="flex justify-center items-center my-5">
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

        <div className="flex flex-col gap-10">
          {/* kOREAN COMBI BLINDS */}
          <div className="flex flex-col md:flex-row md:items-center gap-8 mt-8 px-4 sm:px-6 md:px-8">
            {/* Images Section */}
            <div className="flex flex-col md:flex-row justify-center gap-4 w-full max-w-[1200px] mx-auto">
              {/* Left main image */}
              <div className="w-full md:w-auto">
                <img
                  src={combiBlinds[0].image}
                  alt="Main Blind"
                  className="w-full h-auto md:w-[700px] md:h-[700px] object-cover rounded-tl-[50px] md:rounded-tl-[350px] rounded-tr-lg rounded-br-lg rounded-bl-lg"
                />
              </div>

              {/* Right stacked images (hidden on mobile) */}
              <div className="hidden md:flex flex-col gap-4 w-full md:w-1/4">
                {combiBlinds.slice(1).map((item, index) => (
                  <div key={index} className="h-[150px] md:h-[163px]">
                    <img
                      src={item.image}
                      alt={`Blind ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Korean Combi Blinds */}
            <div className="w-full max-w-full md:max-w-[800px] flex flex-col px-0 sm:px-2 md:px-4 mx-auto">
              {combiBlindsDetails.map((item, index) => {
                if (item.type === "header") {
                  return (
                    <div key={index}>
                      <h1 className="text-xs sm:text-sm md:text-lg opacity-30">
                        ABOUT
                      </h1>
                      <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                        {item.header}
                      </h1>
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg mt-2">
                        {item.description}
                      </p>
                    </div>
                  );
                }

                if (item.type === "detail") {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col gap-1 sm:gap-2 mt-4 sm:mt-6 md:mt-8"
                    >
                      <div className="flex items-center gap-2">
                        {/* Only render icon if it exists */}
                        {IconComponent && <IconComponent fontSize="medium" />}
                        <h1 className="text-sm sm:text-base md:text-lg font-bold">
                          {item.title}
                        </h1>
                      </div>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                        {item.details}
                      </p>
                    </div>
                  );
                }

                return null;
              })}

              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.1rem" },
                  fontWeight: 600,
                  backgroundColor: "#967F5D",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  maxWidth: 300,
                  gap: 2,
                  boxSizing: "border-box",
                  mt: 6,
                }}
                onClick={() => router.push("/details/combi")} // go to modal path
              >
                <span style={{ marginRight: 8, fontSize: "inherit" }}>
                  View More
                </span>
              </Button>
            </div>
          </div>

          {/* ROLLER BLINDS */}
          <div className="flex flex-col-reverse md:flex-row md:items-center gap-8 mt-8 px-4 sm:px-6 md:px-8">
            {/* Text & Details Section */}
            <div className="w-full max-w-full md:max-w-[700px] flex flex-col px-0 sm:px-2 md:px-4 mx-auto">
              {RollerBlinds.map((item, index) => {
                if (item.type === "header") {
                  return (
                    <div key={index}>
                      <h1 className="text-xs sm:text-sm md:text-lg opacity-30">
                        ABOUT
                      </h1>
                      <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                        {item.header}
                      </h1>
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg mt-2">
                        {item.description}
                      </p>
                    </div>
                  );
                }

                if (item.type === "detail") {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col gap-1 sm:gap-2 mt-4 sm:mt-6 md:mt-8"
                    >
                      <div className="flex items-center gap-2">
                        {/* Only render icon if it exists */}
                        {IconComponent && <IconComponent fontSize="medium" />}
                        <h1 className="text-sm sm:text-base md:text-lg font-bold">
                          {item.title}
                        </h1>
                      </div>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                        {item.details}
                      </p>
                    </div>
                  );
                }

                return null;
              })}

              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.1rem" },
                  fontWeight: 600,
                  backgroundColor: "#967F5D",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  maxWidth: 300,
                  gap: 2,
                  boxSizing: "border-box",
                  mt: 6,
                }}
                onClick={() => router.push("/details/rollers")} // go to modal path
              >
                <span style={{ marginRight: 8, fontSize: "inherit" }}>
                  View More
                </span>
              </Button>
            </div>

            {/* Images Section */}
            <div className="flex flex-col md:flex-row justify-center gap-4 w-full max-w-[1200px] mx-auto">
              {/* Left stacked images (hidden on mobile) */}
              <div className="hidden md:flex flex-col gap-4 w-full md:w-1/4">
                {rollerBlindsImg.slice(1).map((item, index) => (
                  <div key={index} className="h-[150px] md:h-[163px]">
                    <img
                      src={item.image}
                      alt={`Blind ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>

              {/* Right main image */}
              <div className="w-full md:w-auto">
                <img
                  src={rollerBlindsImg[0].image}
                  alt="Main Blind"
                  className="w-full h-auto md:w-[700px] md:h-[700px] object-cover rounded-tl-[50px] md:rounded-tr-[350px] rounded-tr-lg rounded-br-lg rounded-bl-lg"
                />
              </div>
            </div>
          </div>

          {/* Fabric curtain & Sheer */}
          <div className="flex flex-col md:flex-row md:items-center gap-8 mt-8 px-4 sm:px-6 md:px-8">
            {/* Images Section */}
            <div className="flex flex-col md:flex-row justify-center gap-4 w-full max-w-[1200px] mx-auto">
              {/* Left main image */}
              <div className="w-full md:w-auto">
                <img
                  src={curtainsBlindsImg[0].image}
                  alt="Main Blind"
                  className="w-full h-auto md:w-[700px] md:h-[700px] object-cover rounded-tl-[50px] md:rounded-tl-[350px] rounded-tr-lg rounded-br-lg rounded-bl-lg"
                />
              </div>

              {/* Right stacked images (hidden on mobile) */}
              <div className="hidden md:flex flex-col gap-4 w-full md:w-1/4">
                {curtainsBlindsImg.slice(1).map((item, index) => (
                  <div key={index} className="h-[150px] md:h-[163px]">
                    <img
                      src={item.image}
                      alt={`Blind ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Korean Combi Blinds */}
            <div className="w-full max-w-full md:max-w-[800px] flex flex-col px-0 sm:px-2 md:px-4 mx-auto">
              {FabriccurtainSheer.map((item, index) => {
                if (item.type === "header") {
                  return (
                    <div key={index}>
                      <h1 className="text-xs sm:text-sm md:text-lg opacity-30">
                        ABOUT
                      </h1>
                      <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                        {item.header}
                      </h1>
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg mt-2">
                        {item.description}
                      </p>
                    </div>
                  );
                }

                if (item.type === "detail") {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col gap-1 sm:gap-2 mt-4 sm:mt-6 md:mt-8"
                    >
                      <div className="flex items-center gap-2">
                        {IconComponent && <IconComponent fontSize="medium" />}
                        <h1 className="text-sm sm:text-base md:text-lg font-bold">
                          {item.title}
                        </h1>
                      </div>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                        {item.details}
                      </p>
                    </div>
                  );
                }

                return null;
              })}

              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.1rem" },
                  fontWeight: 600,
                  backgroundColor: "#967F5D",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  maxWidth: 300,
                  gap: 2,
                  boxSizing: "border-box",
                  mt: 6,
                }}
                onClick={() => router.push("/details/curtainSheer")} // go to modal path
              >
                <span style={{ marginRight: 8, fontSize: "inherit" }}>
                  View More
                </span>
              </Button>
            </div>
          </div>

          {/* Venetian Blinds */}
          <div className="flex flex-col-reverse md:flex-row md:items-center gap-8 mt-8 px-4 sm:px-6 md:px-8">
            {/* Text & Details Section */}
            <div className="w-full max-w-full md:max-w-[700px] flex flex-col px-0 sm:px-2 md:px-4 mx-auto">
              {VenetianBlinds.map((item, index) => {
                if (item.type === "header") {
                  return (
                    <div key={index}>
                      <h1 className="text-xs sm:text-sm md:text-lg opacity-30">
                        ABOUT
                      </h1>
                      <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                        {item.header}
                      </h1>
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg mt-2">
                        {item.description}
                      </p>
                    </div>
                  );
                }

                if (item.type === "detail") {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col gap-1 sm:gap-2 mt-4 sm:mt-6 md:mt-8"
                    >
                      <div className="flex items-center gap-2">
                        {/* Only render icon if it exists */}
                        {IconComponent && <IconComponent fontSize="medium" />}
                        <h1 className="text-sm sm:text-base md:text-lg font-bold">
                          {item.title}
                        </h1>
                      </div>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                        {item.details}
                      </p>
                    </div>
                  );
                }

                return null;
              })}

              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.1rem" },
                  fontWeight: 600,
                  backgroundColor: "#967F5D",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  maxWidth: 300,
                  gap: 2,
                  boxSizing: "border-box",
                  mt: 6,
                }}
                onClick={() => router.push("/details/venetian")} // go to modal path
              >
                <span style={{ marginRight: 8, fontSize: "inherit" }}>
                  View More
                </span>
              </Button>
            </div>

            {/* Images Section */}
            <div className="flex flex-col md:flex-row justify-center gap-4 w-full max-w-[1200px] mx-auto">
              {/* Left stacked images */}
              <div className="hidden md:flex flex-col gap-4 w-full md:w-1/4">
                {venetianBlindsImg.slice(1).map((item, index) => (
                  <div key={index} className="h-[150px] md:h-[163px]">
                    <img
                      src={item.image}
                      alt={`Blind ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>

              {/* Right main image */}
              <div className="w-full md:w-auto">
                <img
                  src={venetianBlindsImg[0].image}
                  alt="Main Blind"
                  className="w-full h-auto md:w-[700px] md:h-[700px] object-cover rounded-tl-[50px] md:rounded-tr-[350px] rounded-tr-lg rounded-br-lg rounded-bl-lg"
                />
              </div>
            </div>
          </div>

          {/* Vertical Blinds*/}
          <div className="flex flex-col md:flex-row md:items-center gap-8 mt-8 px-4 sm:px-6 md:px-8">
            {/* Images Section */}
            <div className="flex flex-col md:flex-row justify-center gap-4 w-full max-w-[1200px] mx-auto">
              {/* Left main image */}
              <div className="w-full md:w-auto">
                <img
                  src={verticalBlindsImg[0].image}
                  alt="Main Blind"
                  className="w-full h-auto md:w-[700px] md:h-[700px] object-cover rounded-tl-[50px] md:rounded-tl-[350px] rounded-tr-lg rounded-br-lg rounded-bl-lg"
                />
              </div>

              {/* Right stacked images */}
              <div className="hidden md:flex flex-col gap-4 w-full md:w-1/4">
                {verticalBlindsImg.slice(1).map((item, index) => (
                  <div key={index} className="h-[150px] md:h-[163px]">
                    <img
                      src={item.image}
                      alt={`Blind ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Korean Combi Blinds */}
            <div className="w-full max-w-full md:max-w-[800px] flex flex-col px-0 sm:px-2 md:px-4 mx-auto">
              {VerticalBlinds.map((item, index) => {
                if (item.type === "header") {
                  return (
                    <div key={index}>
                      <h1 className="text-xs sm:text-sm md:text-lg opacity-30">
                        ABOUT
                      </h1>
                      <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                        {item.header}
                      </h1>
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg mt-2">
                        {item.description}
                      </p>
                    </div>
                  );
                }

                if (item.type === "detail") {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col gap-1 sm:gap-2 mt-4 sm:mt-6 md:mt-8"
                    >
                      <div className="flex items-center gap-2">
                        {/* Only render icon if it exists */}
                        {IconComponent && <IconComponent fontSize="medium" />}
                        <h1 className="text-sm sm:text-base md:text-lg font-bold">
                          {item.title}
                        </h1>
                      </div>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                        {item.details}
                      </p>
                    </div>
                  );
                }

                return null;
              })}

              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.1rem" },
                  fontWeight: 600,
                  backgroundColor: "#967F5D",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  maxWidth: 300,
                  gap: 2,
                  boxSizing: "border-box",
                  mt: 6, // add spacing from last detail
                }}
                onClick={() => router.push("/details/vertical")} // go to modal path
              >
                <span style={{ marginRight: 8, fontSize: "inherit" }}>
                  View More
                </span>
              </Button>
            </div>
          </div>

          {/* Wooden Blinds */}
          <div className="flex flex-col-reverse md:flex-row md:items-center gap-8 mt-8 px-4 sm:px-6 md:px-8">
            {/* Text & Details Section */}
            <div className="w-full max-w-full md:max-w-[700px] flex flex-col px-0 sm:px-2 md:px-4 mx-auto">
              {WoodenBlinds.map((item, index) => {
                if (item.type === "header") {
                  return (
                    <div key={index}>
                      <h1 className="text-xs sm:text-sm md:text-lg opacity-30">
                        ABOUT
                      </h1>
                      <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                        {item.header}
                      </h1>
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg mt-2">
                        {item.description}
                      </p>
                    </div>
                  );
                }

                if (item.type === "detail") {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col gap-1 sm:gap-2 mt-4 sm:mt-6 md:mt-8"
                    >
                      <div className="flex items-center gap-2">
                        {/* Only render icon if it exists */}
                        {IconComponent && <IconComponent fontSize="medium" />}
                        <h1 className="text-sm sm:text-base md:text-lg font-bold">
                          {item.title}
                        </h1>
                      </div>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                        {item.details}
                      </p>
                    </div>
                  );
                }

                return null;
              })}

              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.1rem" },
                  fontWeight: 600,
                  backgroundColor: "#967F5D",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  maxWidth: 300,
                  gap: 2,
                  boxSizing: "border-box",
                  mt: 6,
                }}
                onClick={() => router.push("/details/wooden")} // go to modal path
              >
                <span style={{ marginRight: 8, fontSize: "inherit" }}>
                  View More
                </span>
              </Button>
            </div>

            {/* Images Section */}
            <div className="flex flex-col md:flex-row justify-center gap-4 w-full max-w-[1200px] mx-auto">
              {/* Left stacked images */}
              <div className="hidden md:flex flex-col gap-4 w-full md:w-1/4">
                {woodenBlindsImg.slice(1).map((item, index) => (
                  <div key={index} className="h-[150px] md:h-[163px]">
                    <img
                      src={item.image}
                      alt={`Blind ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>

              {/* Right main image */}
              <div className="w-full md:w-auto">
                <img
                  src={woodenBlindsImg[0].image}
                  alt="Main Blind"
                  className="w-full h-auto md:w-[700px] md:h-[700px] object-cover rounded-tl-[50px] md:rounded-tr-[350px] rounded-tr-lg rounded-br-lg rounded-bl-lg"
                />
              </div>
            </div>
          </div>

          {/* Accordion Blinds*/}
          <div className="flex flex-col md:flex-row md:items-center gap-8 mt-8 px-4 sm:px-6 md:px-8">
            {/* Images Section */}
            <div className="flex flex-col md:flex-row justify-center gap-4 w-full max-w-[1200px] mx-auto">
              {/* Left main image */}
              <div className="w-full md:w-auto">
                <img
                  src={accordionBlindsImg[0].image}
                  alt="Main Blind"
                  className="w-full h-auto md:w-[700px] md:h-[700px] object-cover rounded-tl-[50px] md:rounded-tl-[350px] rounded-tr-lg rounded-br-lg rounded-bl-lg"
                />
              </div>

              {/* Right stacked images */}
              <div className="hidden md:flex flex-col gap-4 w-full md:w-1/4">
                {accordionBlindsImg.slice(1).map((item, index) => (
                  <div key={index} className="h-[150px] md:h-[163px]">
                    <img
                      src={item.image}
                      alt={`Blind ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Korean Combi Blinds */}
            <div className="w-full max-w-full md:max-w-[800px] flex flex-col px-0 sm:px-2 md:px-4 mx-auto">
              {AccordionFoldingDoors.map((item, index) => {
                if (item.type === "header") {
                  return (
                    <div key={index}>
                      <h1 className="text-xs sm:text-sm md:text-lg opacity-30">
                        ABOUT
                      </h1>
                      <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                        {item.header}
                      </h1>
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg mt-2">
                        {item.description}
                      </p>
                    </div>
                  );
                }

                if (item.type === "detail") {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col gap-1 sm:gap-2 mt-4 sm:mt-6 md:mt-8"
                    >
                      <div className="flex items-center gap-2">
                        {/* Only render icon if it exists */}
                        {IconComponent && <IconComponent fontSize="medium" />}
                        <h1 className="text-sm sm:text-base md:text-lg font-bold">
                          {item.title}
                        </h1>
                      </div>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                        {item.details}
                      </p>
                    </div>
                  );
                }

                return null;
              })}

              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.1rem" },
                  fontWeight: 600,
                  backgroundColor: "#967F5D",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  maxWidth: 300,
                  gap: 2,
                  boxSizing: "border-box",
                  mt: 6, // add spacing from last detail
                }}
                onClick={() => router.push("/details/accordion")} // go to modal path
              >
                <span style={{ marginRight: 8, fontSize: "inherit" }}>
                  View More
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200">
        <div className="w-full max-w-[1980px] mx-auto mt-15">
          <div className="flex justify-center items-center my-5">
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
                Recent Project
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

          <div className="mx-4 sm:mx-6 md:mx-10 pb-5 mt-6 sm:mt-8 md:mt-10">
            {/* Feedback Title */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Customer Feedback
            </h2>

            {/* Scrollable Products */}
            <div className="overflow-x-auto">
              <div className="flex sm:flex-wrap gap-6 sm:gap-8">
                {recentProducts.map((product, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[80%] xs:w-[70%] sm:w-[48%] md:w-[30%] lg:w-[23%]"
                  >
                    {/* Image */}
                    <img
                      src={product.image}
                      alt={`Recent Product ${index + 1}`}
                      className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover rounded-lg shadow-md"
                    />

                    {/* Feedback + Person */}
                    <div className="flex items-start gap-2 mt-3">
                      <Person fontSize="medium" className="text-gray-600" />
                      <p className="text-sm sm:text-base italic text-gray-700">
                        "{product.feedback}"
                      </p>
                    </div>

                    {/* Stars */}
                    <div className="flex pl-7 mt-2 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} fontSize="small" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contacts" className="flex flex-col items-center gap-4 mt-8">
        <span
          ref={barRef}
          className="bg-black h-[12px] rounded-full transition-transform duration-700 ease-out origin-center"
          style={{
            width: "clamp(120px, 25vw, 170px)",
            transform: visible ? "scaleX(1)" : "scaleX(0)",
          }}
        ></span>

        <span className="text-black text-base md:text-2xl lg:text-5xl text-center leading-7 md:leading-14">
          Contact Us
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
      <ContactInfo />
      <Footer />
    </>
  );
}
