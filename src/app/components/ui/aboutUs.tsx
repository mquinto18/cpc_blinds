import React, { JSX } from "react";
import { motion } from "framer-motion";
import { Typography, Button, Card, CardContent } from "@mui/material";

// AboutCpcMnl.tsx
// Modern, classy About Us component for CPC MNL Window Blinds
// TailwindCSS + Material UI combined for a clean furniture-inspired aesthetic

export default function AboutCpcMnl(): JSX.Element {
  return (
    <section
      className="bg-gradient-to-b from-white to-gray-100 text-slate-800"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Typography
            variant="h3"
            className="font-bold text-3xl lg:text-4xl mb-4"
          >
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4 items-center sm:items-end justify-center text-center sm:text-left">
              {/* First Logo */}
              <img
                src="/cpc_logs.png"
                alt="CPC MNL Window Blinds"
                className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[100px] object-contain"
              />

              {/* Second Logo */}
              <img
                src="/mnl_logs.png"
                alt="CPC MNL Window Blinds"
                className="w-[120px] sm:w-[160px] md:w-[200px] lg:w-[150px] object-contain self-center sm:self-end"
              />

              {/* Title */}
              <Typography
                variant="h3"
                className="!font-serif text-base sm:text-lg md:text-md lg:text-2xl font-semibold tracking-widest mt-2 sm:mt-0"
              >
                WINDOW BLINDS
              </Typography>
            </div>

            <Typography variant="subtitle1" className=" text-lg">
              Elegance, functionality, and comfort — transforming every window
              into a statement piece.
            </Typography>
          </Typography>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-7"
          >
            <Typography
              variant="body1"
              className="leading-relaxed text-lg text-slate-700"
            >
              With over{" "}
              <span className="font-semibold text-amber-700">
                5 years of experience
              </span>{" "}
              in the interior design industry, we’ve collaborated with
              homeowners, contractors, and architects to deliver window
              solutions that are not only stylish but also enduring.
            </Typography>
            <Typography
              variant="body1"
              className="leading-relaxed text-lg text-slate-700"
            >
              As a direct supplier from Korea, every product is crafted with
              premium quality in mind while ensuring fair pricing. From{" "}
              <span className="font-medium">Korean Window Blinds</span> and{" "}
              <span className="font-medium">Roller Blinds Sunscreen</span>, to{" "}
              <span className="font-medium">Accordion Doors</span> and{" "}
              <span className="font-medium">Premium Curtains</span> — each piece
              is thoughtfully chosen to complement modern Filipino living.
            </Typography>
            <Typography
              variant="body1"
              className="leading-relaxed text-lg text-slate-700"
            >
              What sets us apart is our{" "}
              <span className="font-semibold">commitment to service</span>. From
              your first inquiry to final installation, we deliver a smooth,
              worry-free experience — quick responses, professional guidance,
              and reliable after-sales support.
            </Typography>

            <div className="pt-6">
              <Typography
                variant="h6"
                className="font-semibold mb-3 text-slate-800"
              >
                ✨ Our promise:
              </Typography>
              <ul className="list-disc list-inside text-slate-700 space-y-2 text-lg">
                <li>Premium products at fair prices</li>
                <li>Elegant designs that transform spaces</li>
                <li>Professional, worry-free service</li>
              </ul>
            </div>
          </motion.div>

          {/* Right Side - Video Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="rounded-3xl shadow-2xl overflow-hidden border border-amber-100">
              <CardContent className="p-0">
                <video
                  src="/cpcVideo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-130 object-cover rounded-2xl"
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
