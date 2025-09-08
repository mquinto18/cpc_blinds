"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Box,
  Button,
  TextField,
  Paper,
  Stack,
  Snackbar,
  Alert,
  MenuItem,
  CircularProgress, // 👈 added
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { Allura } from "next/font/google";
import PhoneIcon from "@mui/icons-material/Phone";
import AOS from "aos";

const allura = Allura({
  subsets: ["latin"], // Add other subsets if needed
  weight: "400", // Allura has only one weight
});
export default function ContactInfo() {
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [loading, setLoading] = useState(false); // 👈 NEW state

  // Form data state (controlled from the start)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true, // only animate once
    });
  }, []);

  // Controlled state for FAQ dropdown
  const [selectedFaq, setSelectedFaq] = useState("");

  // Sample FAQs
  const faqOptions = [
    "What types of window blinds do you offer?",
    "Do you provide free measurement and installation?",
    "Can I request a custom size for my windows?",
    "What materials are available for your blinds?",
    "How long does delivery and installation take?",
    "Do you offer warranty on blinds?",
    "What are the price ranges for window blinds?",
    "Can I order blinds online?",
    "Do you have blackout blinds for bedrooms?",
    "How do I clean and maintain the blinds?",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle FAQ selection
  const handleFaqSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = e.target.value;
    setSelectedFaq(selectedValue);

    setFormData((prev) => ({
      ...prev,
      message: selectedValue, // replace message with FAQ
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // 👈 start loading

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setOpen(true);
        setFormData({ name: "", email: "", message: "" });
        setSelectedFaq(""); // reset FAQ
      } else {
        setErrorOpen(true);
      }
    } catch (error) {
      setErrorOpen(true);
    } finally {
      setLoading(false); // 👈 stop loading
    }
  };

  const handleClose = () => setOpen(false);
  const handleErrorClose = () => setErrorOpen(false);

  return (
    <>
      <div className="mx-5 mt-10 rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.1)] overflow-hidden">
        <div
          className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1980px] mx-auto"
          data-aos="fade-up"
        >
          {/* LEFT: Image with text overlay */}
          <div className="relative h-[400px] md:h-auto">
            <Image
              src="/contactImg.jpg"
              alt="Contact background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
              <h2
                className={`text-5xl md:text-8xl font-bold mb-4 leading-snug ${allura.className}`}
                data-aos="fade-up"
              >
                Get your free <br />
                quotation now.
              </h2>

              <div>
                <p className="flex items-center font-bold gap-2 text-lg mb-2">
                  <PhoneIcon />
                  <a href="tel:+639164180061" className="hover:underline">
                    +639164180061
                  </a>
                </p>

                <p className="flex items-center gap-2 font-bold text-lg">
                  <EmailIcon sx={{ color: "white" }} />
                  <a
                    href="mailto:CPCMNLWINDOW@GMAIL.COM"
                    className="hover:underline"
                  >
                    CPCMNLWINDOW@GMAIL.COM
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            px={6}
            py={8}
          >
            <Box mb={3}>
              <Image
                src="/mainLogo.png"
                alt="Logo"
                width={120}
                height={120}
                className="mx-auto"
              />
            </Box>

            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 3,
                bgcolor: "#fff",
                color: "black",
                width: "100%",
                maxWidth: 400,
              }}
            >
              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  {/* Name */}
                  <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    required
                  />

                  {/* Email */}
                  <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    fullWidth
                    required
                  />

                  {/* FAQ Dropdown */}
                  <TextField
                    select
                    label="Frequently Asked Questions"
                    value={selectedFaq}
                    onChange={handleFaqSelect}
                    fullWidth
                  >
                    <MenuItem value="">Select a question...</MenuItem>
                    {faqOptions.map((faq, index) => (
                      <MenuItem key={index} value={faq}>
                        {faq}
                      </MenuItem>
                    ))}
                  </TextField>

                  {/* Message */}
                  <TextField
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    fullWidth
                    required
                  />

                  {/* Submit */}
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={loading} // 👈 disable while loading
                    sx={{
                      mt: 1,
                      backgroundImage:
                        "linear-gradient(to right, #ca8a04, #facc15)",
                      color: "black",
                      fontWeight: "600",
                      borderRadius: 2,
                      py: 1.2,
                      textTransform: "none",
                      "&:hover": {
                        opacity: 0.9,
                        backgroundImage:
                          "linear-gradient(to right, #d97706, #fbbf24)",
                      },
                    }}
                  >
                    {loading ? (
                      <CircularProgress size={24} sx={{ color: "black" }} />
                    ) : (
                      "Confirm"
                    )}
                  </Button>
                </Stack>
              </form>
            </Paper>
          </Box>
        </div>
      </div>

      {/* ✅ Success Toast */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Form submitted successfully!
        </Alert>
      </Snackbar>

      {/* ❌ Error Toast */}
      <Snackbar
        open={errorOpen}
        autoHideDuration={3000}
        onClose={handleErrorClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleErrorClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          Failed to send message. Please try again.
        </Alert>
      </Snackbar>
    </>
  );
}
