"use client";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRef, useEffect, useState } from "react";
import { Person, Star } from "@mui/icons-material";
import { Box } from "@mui/material";
import ContactInfo from "../components/ui/contactInfo";
import { useRouter } from "next/navigation";
import Footer from "../components/ui/Footer";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import AOS from "aos";
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
import AboutUs from "../components/ui/aboutUs";
import AboutCpcMnl from "../components/ui/aboutUs";

export default function Home() {
  const [show, setShow] = useState(false);
  const barRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [showHead, setShowHead] = useState(true);
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true, // only animate once
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headerTitle.length);
    }, 10000); // change every 5s

    return () => clearInterval(interval);
  }, []);

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

  const headerTitle = [
    {
      headline: "luxury Living, One Window at a Time",
      subheadline:
        "Trusted by 1,000+ Filipino homeowners & contractors. Upgrade your home with blinds that combine style, comfort, and privacy.",
    },
    {
      headline: "From Ordinary Windows to Extraordinary Homes",
      subheadline:
        "Join hundreds of satisfied clients who transformed their spaces with CPC MNL Blinds. Book your free consultation today!",
    },
    {
      headline: "Redefine Your Windows. Redefine Your Living",
      subheadline:
        "Elevating Filipino homes since 2022. Get your Custom Blinds consultation now and experience the CPC MNL difference.",
    },
    {
      headline: "Your Home, Elevated",
      subheadline:
        "Trusted by top articts and designers, Schedule your free measurement today and see how we can transform your space.",
    },
    {
      headline: "Because Every Window Deserves Luxury.",
      subheadline:
        "CPC MNL Blinds has beautified 700+ homes nationwide. Start your home upgrade today with a free design consultation.",
    },
  ];

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
          <span // important! forces React to re-render and apply animation
            className="fade-pop text-white text-2xl md:text-4xl lg:text-[50px] text-center leading-10 md:leading-[60px] font-bold"
          >
            Transform Your Windows. <br /> Transform Your Home.
          </span>

          <span className="bg-white w-[200px] md:w-[300px] lg:w-[400px] h-[1px]"></span>

          <p
            className={`text-white text-[12px] md:text-base font-medium text-center transition-all duration-500 delay-100 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } max-w-xs md:max-w-md mx-auto leading-snug`}
          >
            {headerTitle[index].subheadline}
          </p>

          {/* <Button
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
          </Button> */}
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

          <span
            className="text-black text-base md:text-2xl lg:text-5xl text-center leading-7 md:leading-14"
            data-aos="fade-up"
          >
            Window blinds, crafted with care <br /> and designed for light and
            life.
          </span>
          <p
            className={`text-black text-[12px] md:text-base font-medium text-center transition-all duration-1000 delay-200 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            data-aos="fade-up"
          >
            Our window blinds blend timeless design with everyday function,
            giving you
            <br />
            control over light, privacy, and ambiance in any space
          </p>
        </div>
      </div>

      <div className="flex gap-6 mt-8 overflow-x-auto" data-aos="fade-up">
        {CPCImages.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              const sectionId = item.productName
                .toLowerCase()
                .replace(/\s+/g, "-");
              document
                .getElementById(sectionId)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="relative flex cursor-pointer flex-col items-center 
min-w-[200px] w-[300px] h-[600px] group overflow-hidden 
rounded-[20px] shadow-md transition-all duration-700 ease-in-out
active:scale-95 md:hover:scale-105"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.productName}
              className="w-full h-full object-cover rounded-[20px] transition-transform 
         duration-700 ease-in-out md:group-hover:scale-105 md:group-hover:rotate-1"
            />

            {/* Diagonal Reveal Layer */}
            <div
              className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent 
          translate-x-full md:group-hover:translate-x-0 group-active:translate-x-0 
          transition-transform duration-700 ease-out"
            ></div>

            {/* Product Name - Always visible on mobile, hover reveal on desktop */}
            <span
              className="absolute inset-0 flex items-center justify-center text-center 
         text-white text-[12px] font-extrabold tracking-wide 
         md:opacity-0 md:group-hover:opacity-100 md:group-hover:scale-110 
         opacity-100 group-active:scale-110
         transition-all duration-700 ease-in-out
         [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)] md:[text-shadow:none]
         md:group-hover:[text-shadow:2px_2px_4px_rgba(0,0,0,0.8)]"
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

            <span
              className="text-black text-base md:text-2xl lg:text-5xl text-center leading-7 md:leading-14"
              data-aos="fade-up"
            >
              Inspiration Gallery
            </span>
            <p
              className={`text-black text-[12px] md:text-base font-medium text-center transition-all duration-1000 delay-200 ${
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              data-aos="fade-up"
            >
              Discover how our window blinds transform spaces with style and
              <br />
              elegance in our Inspiration Gallery
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {/* kOREAN COMBI BLINDS */}
          <div
            className="flex flex-col md:flex-row md:items-center gap-8 mt-8 px-4 sm:px-6 md:px-8"
            id="korean-combi-blinds"
          >
            {/* Video (always visible — top on mobile, left on desktop) */}
            <div className="w-full max-w-[1200px] mx-auto" data-aos="fade-up">
              <video
                src={combiBlinds[0].image}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[280px] sm:h-[350px] md:w-[800px] md:h-[700px] object-cover 
             rounded-[20px] md:rounded-tl-[350px] md:rounded-tr-lg md:rounded-br-lg md:rounded-bl-lg"
                onClick={() => router.push("/details/combi")}
              />
            </div>

            {/* Desktop layout: stacked images on the right */}
            <div
              className="hidden md:flex flex-col gap-4 w-full md:w-1/4"
              onClick={() => router.push("/details/combi")}
            >
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

            {/* Desktop text + button */}
            <div
              className="hidden md:flex w-full max-w-[550px] flex-col px-0 sm:px-2 md:px-4 mx-auto"
              data-aos="fade-up"
            >
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

              {/* Desktop button */}
              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontSize: { md: "1.1rem" },
                  fontWeight: 600,
                  backgroundColor: "#967F5D",
                  textTransform: "none",
                  width: "100%",
                  maxWidth: 300,
                  mt: 6,
                }}
                onClick={() => router.push("/details/combi")}
              >
                View More
              </Button>
            </div>

            {/* Mobile layout: Text + Images (video already on top) */}
            <div
              className="flex md:hidden flex-row gap-4 w-full items-stretch"
              data-aos="fade-up"
            >
              {/* Text content */}
              <div className="flex-1 flex flex-col justify-between">
                {combiBlindsDetails.map((item, index) => {
                  if (item.type === "header") {
                    return (
                      <div key={index}>
                        <h1 className="text-xs sm:text-sm opacity-30">ABOUT</h1>
                        <h1 className="text-lg sm:text-xl font-bold">
                          {item.header}
                        </h1>
                        <p className="text-gray-700 text-sm sm:text-base mt-2">
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
                        className="flex flex-col gap-1 sm:gap-2 mt-4"
                      >
                        <div className="flex items-center gap-2">
                          {IconComponent && <IconComponent fontSize="medium" />}
                          <h1 className="text-sm sm:text-base font-bold">
                            {item.title}
                          </h1>
                        </div>
                        <p className="text-gray-700 text-xs sm:text-sm">
                          {item.details}
                        </p>
                      </div>
                    );
                  }

                  return null;
                })}

                {/* Mobile button */}
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    fontSize: { xs: "0.85rem", sm: "0.95rem" },
                    fontWeight: 600,
                    backgroundColor: "#967F5D",
                    textTransform: "none",
                    width: "100%",
                    maxWidth: 200,
                    mt: 4,
                  }}
                  onClick={() => router.push("/details/combi")}
                >
                  View More
                </Button>
              </div>

              {/* Images on the right */}
              <div
                className="flex flex-col gap-4 flex-1"
                onClick={() => router.push("/details/combi")}
              >
                {combiBlinds.slice(1).map((item, index) => (
                  <div key={index} className="flex-1">
                    <img
                      src={item.image}
                      alt={`Blind ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ROLLER BLINDS */}
          <div
            className="flex flex-col md:flex-row md:items-center gap-8 mt-8 px-4 sm:px-6 md:px-8"
            id="roller-blinds-sunscreen"
          >
            {/* Desktop layout: Text + Images/Video */}
            <div className="hidden md:flex flex-row gap-8 w-full">
              {/* Text & Details Section (Desktop) */}
              <div
                className="w-full max-w-[550px] flex flex-col px-0 sm:px-2 md:px-4 mx-auto"
                data-aos="fade-up"
              >
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

                {/* Desktop button */}
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    fontSize: { md: "1.1rem" },
                    fontWeight: 600,
                    backgroundColor: "#967F5D",
                    textTransform: "none",
                    width: "100%",
                    maxWidth: 300,
                    mt: 6,
                  }}
                  onClick={() => router.push("/details/rollers")}
                >
                  View More
                </Button>
              </div>

              {/* Images + Video Section (Desktop) */}
              <div
                className="flex flex-col md:flex-row justify-center gap-4 w-full max-w-[1200px] mx-auto"
                data-aos="fade-up"
              >
                {/* Left stacked images */}
                <div
                  className="flex flex-col gap-4 w-full md:w-1/4"
                  onClick={() => router.push("/details/rollers")}
                >
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

                {/* Right main video */}
                <div className="w-full md:w-auto">
                  <video
                    src={rollerBlindsImg[0].image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto md:w-[800px] md:h-[700px] object-cover rounded-tl-[350px] rounded-tr-lg rounded-br-lg rounded-bl-lg"
                    onClick={() => router.push("/details/rollers")}
                  />
                </div>
              </div>
            </div>

            {/* Mobile layout: Video on top + Text + Images */}
            <div
              className="flex md:hidden flex-col gap-4 w-full"
              data-aos="fade-up"
            >
              {/* Video (top on mobile) */}
              <div className="w-full">
                <video
                  src={rollerBlindsImg[0].image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[280px] sm:h-[350px] md:w-[800px] md:h-[700px] object-cover 
             rounded-[20px] md:rounded-tl-[350px] md:rounded-tr-lg md:rounded-br-lg md:rounded-bl-lg"
                  onClick={() => router.push("/details/rollers")}
                />
              </div>

              {/* Text + Images (side by side) */}
              <div className="flex flex-row gap-4 w-full items-stretch">
                {/* Text Section */}
                <div className="flex-1 flex flex-col justify-between">
                  {RollerBlinds.map((item, index) => {
                    if (item.type === "header") {
                      return (
                        <div key={index}>
                          <h1 className="text-xs sm:text-sm opacity-30">
                            ABOUT
                          </h1>
                          <h1 className="text-lg sm:text-xl font-bold">
                            {item.header}
                          </h1>
                          <p className="text-gray-700 text-sm sm:text-base mt-2">
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
                          className="flex flex-col gap-1 sm:gap-2 mt-4"
                        >
                          <div className="flex items-center gap-2">
                            {IconComponent && (
                              <IconComponent fontSize="medium" />
                            )}
                            <h1 className="text-sm sm:text-base font-bold">
                              {item.title}
                            </h1>
                          </div>
                          <p className="text-gray-700 text-xs sm:text-sm">
                            {item.details}
                          </p>
                        </div>
                      );
                    }

                    return null;
                  })}

                  {/* Mobile button */}
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      fontSize: { xs: "0.85rem", sm: "0.95rem" },
                      fontWeight: 600,
                      backgroundColor: "#967F5D",
                      textTransform: "none",
                      width: "100%",
                      maxWidth: 200,
                      mt: 4,
                    }}
                    onClick={() => router.push("/details/rollers")}
                  >
                    View More
                  </Button>
                </div>

                {/* Images Section */}
                <div
                  className="flex flex-col gap-4 flex-1"
                  onClick={() => router.push("/details/rollers")}
                >
                  {rollerBlindsImg.slice(1).map((item, index) => (
                    <div key={index} className="flex-1">
                      <img
                        src={item.image}
                        alt={`Blind ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Fabric curtain & Sheer */}
          <div
            className="flex flex-col md:flex-row md:items-center gap-8 mt-8 px-4 sm:px-6 md:px-8"
            id="fabric-curtains-and-sheer"
          >
            {/* Desktop layout: Video + Images + Text */}
            <div className="hidden md:flex flex-row gap-8 w-full">
              {/* Left Video + Images */}
              <div
                className="flex flex-col md:flex-row justify-center gap-4 w-full max-w-[1200px] mx-auto"
                data-aos="fade-up"
              >
                {/* Left main video */}
                <div className="w-full md:w-auto">
                  <video
                    src={curtainsBlindsImg[0].image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto md:w-[800px] md:h-[700px] object-cover rounded-tl-[350px] rounded-tr-lg rounded-br-lg rounded-bl-lg"
                    onClick={() => router.push("/details/curtainSheer")}
                  />
                </div>

                {/* Right stacked images */}
                <div
                  className="flex flex-col gap-4 w-full md:w-1/4"
                  onClick={() => router.push("/details/curtainSheer")}
                >
                  {curtainsBlindsImg.slice(1).map((item, index) => (
                    <div key={index} className="h-[150px] md:h-[163px]">
                      <img
                        src={item.image}
                        alt={`Curtain ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Text & Details Section (Desktop) */}
              <div
                className="w-full max-w-[550px] flex flex-col px-0 sm:px-2 md:px-4 mx-auto"
                data-aos="fade-up"
              >
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

                {/* Desktop button */}
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    fontSize: { md: "1.1rem" },
                    fontWeight: 600,
                    backgroundColor: "#967F5D",
                    textTransform: "none",
                    width: "100%",
                    maxWidth: 300,
                    mt: 6,
                  }}
                  onClick={() => router.push("/details/curtainSheer")}
                >
                  View More
                </Button>
              </div>
            </div>

            {/* Mobile layout: Video on top + Text + Images */}
            <div
              className="flex md:hidden flex-col gap-4 w-full"
              data-aos="fade-up"
            >
              {/* Video (top on mobile) */}
              <div className="w-full">
                <video
                  src={curtainsBlindsImg[0].image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[280px] sm:h-[350px] md:w-[800px] md:h-[700px] object-cover 
             rounded-[20px] md:rounded-tl-[350px] md:rounded-tr-lg md:rounded-br-lg md:rounded-bl-lg"
                  onClick={() => router.push("/details/curtainSheer")}
                />
              </div>

              {/* Text + Images below video */}
              <div className="flex flex-row gap-4 w-full items-stretch">
                {/* Text Section */}
                <div className="flex-1 flex flex-col justify-between">
                  {FabriccurtainSheer.map((item, index) => {
                    if (item.type === "header") {
                      return (
                        <div key={index}>
                          <h1 className="text-xs sm:text-sm opacity-30">
                            ABOUT
                          </h1>
                          <h1 className="text-lg sm:text-xl font-bold">
                            {item.header}
                          </h1>
                          <p className="text-gray-700 text-sm sm:text-base mt-2">
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
                          className="flex flex-col gap-1 sm:gap-2 mt-4"
                        >
                          <div className="flex items-center gap-2">
                            {IconComponent && (
                              <IconComponent fontSize="medium" />
                            )}
                            <h1 className="text-sm sm:text-base font-bold">
                              {item.title}
                            </h1>
                          </div>
                          <p className="text-gray-700 text-xs sm:text-sm">
                            {item.details}
                          </p>
                        </div>
                      );
                    }

                    return null;
                  })}

                  {/* Mobile button */}
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      fontSize: { xs: "0.85rem", sm: "0.95rem" },
                      fontWeight: 600,
                      backgroundColor: "#967F5D",
                      textTransform: "none",
                      width: "100%",
                      maxWidth: 200,
                      mt: 4,
                    }}
                    onClick={() => router.push("/details/curtainSheer")}
                  >
                    View More
                  </Button>
                </div>

                {/* Images Section */}
                <div
                  className="flex flex-col gap-4 flex-1"
                  onClick={() => router.push("/details/curtainSheer")}
                >
                  {curtainsBlindsImg.slice(1).map((item, index) => (
                    <div key={index} className="flex-1">
                      <img
                        src={item.image}
                        alt={`Curtain ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Venetian Blinds */}
          <div
            className="flex flex-col md:flex-row md:items-center gap-8 mt-8 px-4 sm:px-6 md:px-8"
            id="venetian-blinds"
          >
            {/* Desktop layout: Text (Left) + Images/Video (Right) */}
            <div className="hidden md:flex flex-row gap-8 w-full">
              {/* Text & Details Section (Desktop) */}
              <div
                className="w-full max-w-[550px] flex flex-col px-0 sm:px-2 md:px-4 mx-auto"
                data-aos="fade-up"
              >
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

                {/* Desktop button */}
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    fontSize: { md: "1.1rem" },
                    fontWeight: 600,
                    backgroundColor: "#967F5D",
                    textTransform: "none",
                    width: "100%",
                    maxWidth: 300,
                    mt: 6,
                  }}
                  onClick={() => router.push("/details/venetian")}
                >
                  View More
                </Button>
              </div>

              {/* Images + Video Section (Desktop) */}
              <div
                className="flex flex-col md:flex-row justify-center gap-4 w-full max-w-[1200px] mx-auto"
                data-aos="fade-up"
              >
                {/* Left stacked images */}
                <div
                  className="flex flex-col gap-4 w-full md:w-1/4"
                  onClick={() => router.push("/details/venetian")}
                >
                  {venetianBlindsImg.slice(1).map((item, index) => (
                    <div key={index} className="h-[150px] md:h-[163px]">
                      <img
                        src={item.image}
                        alt={`Venetian ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>

                {/* Right main video */}
                <div className="w-full md:w-auto">
                  <video
                    src={venetianBlindsImg[0].image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto md:w-[800px] md:h-[700px] object-cover rounded-tl-[350px] rounded-tr-lg rounded-br-lg rounded-bl-lg"
                    onClick={() => router.push("/details/venetian")}
                  />
                </div>
              </div>
            </div>

            {/* Mobile layout: Video on top + Text + Images */}
            <div
              className="flex md:hidden flex-col gap-4 w-full"
              data-aos="fade-up"
            >
              {/* Video (top on mobile) */}
              <div className="w-full">
                <video
                  src={venetianBlindsImg[0].image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[280px] sm:h-[350px] md:w-[800px] md:h-[700px] object-cover 
             rounded-[20px] md:rounded-tl-[350px] md:rounded-tr-lg md:rounded-br-lg md:rounded-bl-lg"
                  onClick={() => router.push("/details/venetian")}
                />
              </div>

              {/* Text + Images below video */}
              <div className="flex flex-row gap-4 w-full items-stretch">
                {/* Text Section */}
                <div className="flex-1 flex flex-col justify-between">
                  {VenetianBlinds.map((item, index) => {
                    if (item.type === "header") {
                      return (
                        <div key={index}>
                          <h1 className="text-xs sm:text-sm opacity-30">
                            ABOUT
                          </h1>
                          <h1 className="text-lg sm:text-xl font-bold">
                            {item.header}
                          </h1>
                          <p className="text-gray-700 text-sm sm:text-base mt-2">
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
                          className="flex flex-col gap-1 sm:gap-2 mt-4"
                        >
                          <div className="flex items-center gap-2">
                            {IconComponent && (
                              <IconComponent fontSize="medium" />
                            )}
                            <h1 className="text-sm sm:text-base font-bold">
                              {item.title}
                            </h1>
                          </div>
                          <p className="text-gray-700 text-xs sm:text-sm">
                            {item.details}
                          </p>
                        </div>
                      );
                    }

                    return null;
                  })}

                  {/* Mobile button */}
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      fontSize: { xs: "0.85rem", sm: "0.95rem" },
                      fontWeight: 600,
                      backgroundColor: "#967F5D",
                      textTransform: "none",
                      width: "100%",
                      maxWidth: 200,
                      mt: 4,
                    }}
                    onClick={() => router.push("/details/venetian")}
                  >
                    View More
                  </Button>
                </div>

                {/* Images Section */}
                <div
                  className="flex flex-col gap-4 flex-1"
                  onClick={() => router.push("/details/venetian")}
                >
                  {venetianBlindsImg.slice(1).map((item, index) => (
                    <div key={index} className="flex-1">
                      <img
                        src={item.image}
                        alt={`Venetian ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Blinds*/}
          <div
            className="flex flex-col md:flex-row md:items-center gap-8 mt-8 px-4 sm:px-6 md:px-8"
            id="vertical-blinds"
          >
            {/* Desktop layout: Video + Images + Text */}
            <div className="hidden md:flex flex-row gap-8 w-full">
              {/* Images + Video Section (Desktop) */}
              <div
                className="flex flex-col md:flex-row justify-center gap-4 w-full max-w-[1200px] mx-auto"
                data-aos="fade-up"
              >
                {/* Left main video */}
                <div className="w-full md:w-auto">
                  <video
                    src={verticalBlindsImg[0].image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto md:w-[800px] md:h-[700px] object-cover rounded-tl-[350px] rounded-tr-lg rounded-br-lg rounded-bl-lg"
                    onClick={() => router.push("/details/vertical")}
                  />
                </div>

                {/* Right stacked images */}
                <div
                  className="flex flex-col gap-4 w-full md:w-1/4"
                  onClick={() => router.push("/details/vertical")}
                >
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

              {/* Text & Details Section (Desktop) */}
              <div
                className="w-full max-w-[550px] flex flex-col px-0 sm:px-2 md:px-4 mx-auto"
                data-aos="fade-up"
              >
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

                {/* Desktop button */}
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    fontSize: { md: "1.1rem" },
                    fontWeight: 600,
                    backgroundColor: "#967F5D",
                    textTransform: "none",
                    width: "100%",
                    maxWidth: 300,
                    mt: 6,
                  }}
                  onClick={() => router.push("/details/vertical")}
                >
                  View More
                </Button>
              </div>
            </div>

            {/* Mobile layout: Video on top + Text + Images */}
            <div
              className="flex md:hidden flex-col gap-4 w-full"
              data-aos="fade-up"
            >
              {/* Video (top on mobile) */}
              <div className="w-full">
                <video
                  src={verticalBlindsImg[0].image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[280px] sm:h-[350px] md:w-[800px] md:h-[700px] object-cover 
             rounded-[20px] md:rounded-tl-[350px] md:rounded-tr-lg md:rounded-br-lg md:rounded-bl-lg"
                  onClick={() => router.push("/details/vertical")}
                />
              </div>

              {/* Text + Images below video */}
              <div className="flex flex-row gap-4 w-full items-stretch">
                {/* Text Section */}
                <div className="flex-1 flex flex-col justify-between">
                  {VerticalBlinds.map((item, index) => {
                    if (item.type === "header") {
                      return (
                        <div key={index}>
                          <h1 className="text-xs sm:text-sm opacity-30">
                            ABOUT
                          </h1>
                          <h1 className="text-lg sm:text-xl font-bold">
                            {item.header}
                          </h1>
                          <p className="text-gray-700 text-sm sm:text-base mt-2">
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
                          className="flex flex-col gap-1 sm:gap-2 mt-4"
                        >
                          <div className="flex items-center gap-2">
                            {IconComponent && (
                              <IconComponent fontSize="medium" />
                            )}
                            <h1 className="text-sm sm:text-base font-bold">
                              {item.title}
                            </h1>
                          </div>
                          <p className="text-gray-700 text-xs sm:text-sm">
                            {item.details}
                          </p>
                        </div>
                      );
                    }

                    return null;
                  })}

                  {/* Mobile button */}
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      fontSize: { xs: "0.85rem", sm: "0.95rem" },
                      fontWeight: 600,
                      backgroundColor: "#967F5D",
                      textTransform: "none",
                      width: "100%",
                      maxWidth: 200,
                      mt: 4,
                    }}
                    onClick={() => router.push("/details/vertical")}
                  >
                    View More
                  </Button>
                </div>

                {/* Images Section (mobile right side) */}
                <div
                  className="flex flex-col gap-4 flex-1"
                  onClick={() => router.push("/details/vertical")}
                >
                  {verticalBlindsImg.slice(1).map((item, index) => (
                    <div key={index} className="flex-1">
                      <img
                        src={item.image}
                        alt={`Blind ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Wooden Blinds */}
          <div
            className="flex flex-col md:flex-row md:items-center gap-8 mt-8 px-4 sm:px-6 md:px-8"
            id="wooden-blinds"
          >
            {/* Desktop layout: Text + Images/Video */}
            <div className="hidden md:flex flex-row gap-8 w-full">
              {/* Text & Details Section (Desktop) */}
              <div
                className="w-full max-w-[550px] flex flex-col px-0 sm:px-2 md:px-4 mx-auto"
                data-aos="fade-up"
              >
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

                {/* Desktop button */}
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    fontSize: { md: "1.1rem" },
                    fontWeight: 600,
                    backgroundColor: "#967F5D",
                    textTransform: "none",
                    width: "100%",
                    maxWidth: 300,
                    mt: 6,
                  }}
                  onClick={() => router.push("/details/wooden")}
                >
                  View More
                </Button>
              </div>

              {/* Images + Video Section (Desktop) */}
              <div
                className="flex flex-col md:flex-row justify-center gap-4 w-full max-w-[1200px] mx-auto"
                data-aos="fade-up"
              >
                {/* Left stacked images */}
                <div
                  className="flex flex-col gap-4 w-full md:w-1/4"
                  onClick={() => router.push("/details/wooden")}
                >
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

                {/* Right main video */}
                <div className="w-full md:w-auto">
                  <video
                    src={woodenBlindsImg[0].image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto md:w-[800px] md:h-[700px] object-cover rounded-tl-[350px] rounded-tr-lg rounded-br-lg rounded-bl-lg"
                    onClick={() => router.push("/details/wooden")}
                  />
                </div>
              </div>
            </div>

            {/* Mobile layout: Video on top, then Text + Images row */}
            <div
              className="flex md:hidden flex-col gap-4 w-full"
              data-aos="fade-up"
            >
              {/* Video on top */}
              <div className="w-full">
                <video
                  src={woodenBlindsImg[0].image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[280px] sm:h-[350px] md:w-[800px] md:h-[700px] object-cover 
             rounded-[20px] md:rounded-tl-[350px] md:rounded-tr-lg md:rounded-br-lg md:rounded-bl-lg"
                  onClick={() => router.push("/details/wooden")}
                />
              </div>

              {/* Text + Images side by side */}
              <div className="flex flex-row gap-4 w-full items-stretch">
                {/* Text Section (left) */}
                <div className="flex-1 flex flex-col justify-between">
                  {WoodenBlinds.map((item, index) => {
                    if (item.type === "header") {
                      return (
                        <div key={index}>
                          <h1 className="text-xs sm:text-sm opacity-30">
                            ABOUT
                          </h1>
                          <h1 className="text-lg sm:text-xl font-bold">
                            {item.header}
                          </h1>
                          <p className="text-gray-700 text-sm sm:text-base mt-2">
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
                          className="flex flex-col gap-1 sm:gap-2 mt-4"
                        >
                          <div className="flex items-center gap-2">
                            {IconComponent && (
                              <IconComponent fontSize="medium" />
                            )}
                            <h1 className="text-sm sm:text-base font-bold">
                              {item.title}
                            </h1>
                          </div>
                          <p className="text-gray-700 text-xs sm:text-sm">
                            {item.details}
                          </p>
                        </div>
                      );
                    }

                    return null;
                  })}

                  {/* Mobile button */}
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      fontSize: { xs: "0.85rem", sm: "0.95rem" },
                      fontWeight: 600,
                      backgroundColor: "#967F5D",
                      textTransform: "none",
                      width: "100%",
                      maxWidth: 200,
                      mt: 4,
                    }}
                    onClick={() => router.push("/details/wooden")}
                  >
                    View More
                  </Button>
                </div>

                {/* Images Section (right side) */}
                <div
                  className="flex flex-col gap-4 flex-1"
                  onClick={() => router.push("/details/wooden")}
                >
                  {woodenBlindsImg.slice(1).map((item, index) => (
                    <div key={index} className="flex-1">
                      <img
                        src={item.image}
                        alt={`Blind ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Accordion Blinds*/}
          <div
            className="flex flex-col md:flex-row md:items-center gap-8 mt-8 px-4 sm:px-6 md:px-8"
            id="accordion-folding-doors"
          >
            {/* Desktop layout: Main image left, stacked images right (unchanged) */}
            <div className="hidden md:flex flex-row gap-8 w-full">
              {/* Images Section (Desktop) */}
              <div
                className="flex flex-col md:flex-row justify-center gap-4 w-full max-w-[1200px] mx-auto"
                data-aos="fade-up"
              >
                {/* Left main image */}
                <div className="w-full md:w-auto">
                  <img
                    src={accordionBlindsImg[0].image}
                    alt="Accordion Blind"
                    className="w-full h-auto md:w-[800px] md:h-[700px] object-cover rounded-tl-[350px] rounded-tr-lg rounded-br-lg rounded-bl-lg cursor-pointer"
                    onClick={() => router.push("/details/accordion")}
                  />
                </div>

                {/* Right stacked images */}
                <div
                  className="flex flex-col gap-4 w-full md:w-1/4"
                  onClick={() => router.push("/details/accordion")}
                >
                  {accordionBlindsImg.slice(1).map((item, index) => (
                    <div key={index} className="h-[150px] md:h-[163px]">
                      <img
                        src={item.image}
                        alt={`Accordion Blind ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Text Section (Desktop) */}
              <div
                className="w-full max-w-[550px] flex flex-col px-0 sm:px-2 md:px-4 mx-auto"
                data-aos="fade-up"
              >
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
                    fontSize: { md: "1.1rem" },
                    fontWeight: 600,
                    backgroundColor: "#967F5D",
                    textTransform: "none",
                    width: "100%",
                    maxWidth: 300,
                    mt: 6,
                  }}
                  onClick={() => router.push("/details/accordion")}
                >
                  View More
                </Button>
              </div>
            </div>

            {/* Mobile layout: Main image on top, then text + stacked images */}
            <div
              className="flex md:hidden flex-col gap-4 w-full"
              data-aos="fade-up"
            >
              {/* Main image on top */}
              <div className="w-full h-[280px]">
                <img
                  src={accordionBlindsImg[0].image}
                  alt="Accordion Blind"
                  className="w-full h-[280px] sm:h-[350px] md:w-[800px] md:h-[700px] object-cover 
             rounded-[20px] md:rounded-tl-[350px] md:rounded-tr-lg md:rounded-br-lg md:rounded-bl-lg"
                  onClick={() => router.push("/details/accordion")}
                />
              </div>

              {/* Text + stacked images row */}
              <div className="flex flex-row gap-4 w-full items-stretch">
                {/* Text Section (left) */}
                <div className="flex-1 flex flex-col justify-between">
                  {AccordionFoldingDoors.map((item, index) => {
                    if (item.type === "header") {
                      return (
                        <div key={index}>
                          <h1 className="text-xs sm:text-sm opacity-30">
                            ABOUT
                          </h1>
                          <h1 className="text-lg sm:text-xl font-bold">
                            {item.header}
                          </h1>
                          <p className="text-gray-700 text-sm sm:text-base mt-2">
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
                          className="flex flex-col gap-1 sm:gap-2 mt-4"
                        >
                          <div className="flex items-center gap-2">
                            {IconComponent && (
                              <IconComponent fontSize="medium" />
                            )}
                            <h1 className="text-sm sm:text-base font-bold">
                              {item.title}
                            </h1>
                          </div>
                          <p className="text-gray-700 text-xs sm:text-sm">
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
                      fontSize: { xs: "0.85rem", sm: "0.95rem" },
                      fontWeight: 600,
                      backgroundColor: "#967F5D",
                      textTransform: "none",
                      width: "100%",
                      maxWidth: 200,
                      mt: 4,
                    }}
                    onClick={() => router.push("/details/accordion")}
                  >
                    View More
                  </Button>
                </div>

                {/* Images Section (right side) */}
                <div
                  className="flex flex-col gap-4 flex-1"
                  onClick={() => router.push("/details/accordion")}
                >
                  {accordionBlindsImg.slice(1).map((item, index) => (
                    <div key={index} className="flex-1">
                      <img
                        src={item.image}
                        alt={`Accordion Blind ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
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

              <span
                className="text-black text-base md:text-2xl lg:text-5xl text-center leading-7 md:leading-14"
                data-aos="fade-up"
              >
                Recent Project
              </span>
              <p
                className={`text-black text-[12px] md:text-base font-medium text-center transition-all duration-1000 delay-200 ${
                  show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                data-aos="fade-up"
              >
                Discover how our window blinds transform spaces with style and
                <br />
                elegance in our Inspiration Gallery
              </p>
            </div>
          </div>

          <div
            className="mx-4 sm:mx-6 md:mx-10 pb-5 mt-6 sm:mt-8 md:mt-10"
            data-aos="fade-up"
          >
            {/* Feedback Title */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Customer Feedback
            </h2>

            {/* Scrollable Products */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-6 sm:gap-8 snap-x snap-mandatory">
                {recentProducts.map((product, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[80%] xs:w-[70%] sm:w-[48%] md:w-[30%] lg:w-[23%] snap-start rounded-xl shadow-md overflow-hidden"
                  >
                    <img
                      src={product.image}
                      alt={`Recent Product ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
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

        <span
          className="text-black text-base md:text-2xl lg:text-5xl text-center leading-7 md:leading-14"
          data-aos="fade-up"
        >
          Contact Us
        </span>
        <p
          className={`text-black text-[12px] md:text-base font-medium text-center transition-all duration-1000 delay-200 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          data-aos="fade-up"
        >
          Discover how our window blinds transform spaces with style and
          <br />
          elegance in our Inspiration Gallery
        </p>
      </div>
      <ContactInfo />
      <AboutCpcMnl />
      <Footer />
    </>
  );
}
