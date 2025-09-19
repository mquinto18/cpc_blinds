"use client";

import React from "react";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import { useState, useEffect } from "react";

export default function Footer() {
  const quotes = [
    [
      "Trusted by 1,000+ Filipino homeowners & contractors.",
      "Upgrade your home with blinds that",
      "combine style, comfort, and privacy.",
      "",
    ],
    [
      "Join hundreds of satisfied clients",
      "who transformed their spaces with CPC MNL Blinds.",
      "Book your free consultation today!",
      "",
    ],
    [
      "Elevating Filipino homes since 2022.",
      "Get your Custom Blinds consultation now",
      "and experience the CPC MNL difference.",
      "",
    ],
    [
      "Trusted by top articts and designers,",
      "Schedule your free measurement today",
      "and see how we can transform your space.",
      "",
    ],
    [
      "CPC MNL Blinds has beautified 700+ homes nationwide.",
      "Start your home upgrade today",
      "with a free design consultation.",
      "",
    ],
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <footer className="border-t border-b border-gray-200 mt-10 px-6 sm:px-10 mx-15 my-10">
      <div className="w-full max-w-[1980px] mx-auto py-10 flex flex-col md:flex-row md:items-start justify-between gap-10">
        {/* Left Section - Logo + Quote */}
        <div className="flex-1 text-center md:text-left">
          <Image
            src="/mainlogo.png"
            alt="Logo"
            width={120}
            height={120}
            className="object-contain mx-auto md:mx-0"
          />
          <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg italic leading-relaxed transition-opacity duration-700">
            {quotes[currentIndex].map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-3 mt-5">
            <a
              href="https://www.facebook.com/share/1AkX5MJTxm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-black rounded-full p-2 hover:bg-gray-800 transition">
                <FacebookIcon sx={{ color: "white" }} />
              </div>
            </a>
            <a
              href="https://www.instagram.com/cpcmnlwindowblinds?igsh=cGFqMWt6eDhydXdo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-black rounded-full p-2 hover:bg-gray-800 transition">
                <InstagramIcon sx={{ color: "white" }} />
              </div>
            </a>
            <a
              href="https://twitter.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-black rounded-full p-2 hover:bg-gray-800 transition">
                <TwitterIcon sx={{ color: "white" }} />
              </div>
            </a>
            <a href="CPCMNLWINDOW@GMAIL.COM">
              <div className="bg-black rounded-full p-2 hover:bg-gray-800 transition">
                <EmailIcon sx={{ color: "white" }} />
              </div>
            </a>
          </div>
        </div>

        {/* Middle + Right Section */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 w-full md:w-auto justify-center text-center md:text-left">
          {/* Middle Section - Other Pages */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3">
              Other Pages
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="#home" className="hover:text-black transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-black transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-black transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="contacts" className="hover:text-black transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section - Contacts */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3">
              Contacts
            </h3>

            {/* Phone link */}
            <p>
              <a
                href="tel:09164180061"
                className="text-gray-700 hover:text-black transition"
              >
                0916.418.0061
              </a>
            </p>

            {/* Email link */}
            <p>
              <a
                href="mailto:cpcmnlwindow@gmail.com"
                className="text-gray-700 break-words hover:text-black transition"
              >
                cpcmnlwindow@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
