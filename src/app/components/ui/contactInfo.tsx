"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Box,
  Button,
  TextField,
  Paper,
  Stack,
  Snackbar,
  Alert,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export default function ContactInfo() {
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setOpen(true); // success toast
        setFormData({ name: "", email: "", message: "" }); // reset form
      } else {
        setErrorOpen(true); // error toast
      }
    } catch (error) {
      setErrorOpen(true);
    }
  };

  const handleClose = () => setOpen(false);
  const handleErrorClose = () => setErrorOpen(false);

  return (
    <>
      <div className="mx-5 mt-10 rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.1)] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1980px] mx-auto">
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-snug">
                Get your free <br /> quotation now.
              </h2>
              <div>
                <p className="flex items-center font-bold gap-2 text-lg mb-2">
                  <PhoneIcon /> +66 9519 4016
                </p>
                <p className="flex items-center gap-2 font-bold text-lg">
                  <EmailIcon sx={{ color: "white" }} />
                  CPCMNLWINDOW@GMAIL.COM
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
                  <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                  <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    fullWidth
                    required
                  />
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
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
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
                    Confirm
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
