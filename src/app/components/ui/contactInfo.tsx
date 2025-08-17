"use client";

import Image from "next/image";
import { Box, Button, TextField, Paper, Stack } from "@mui/material";

export default function ContactInfo() {
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

            {/* Overlay text */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-snug">
                Get your free <br /> quotation now.
              </h2>

              <div>
                <p className="flex items-center font-bold gap-2 text-lg mb-2">
                  📞 +66 9519 4016
                </p>
                <p className="flex items-center gap-2 font-bold text-lg">
                  ✉️ CPCMNLWINDOW@GMAIL.COM
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Form with MUI */}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            px={6}
            py={8}
            sx={{ color: "white" }}
          >
            {/* Logo centered */}
            <Box mb={3}>
              <Image
                src="/mainLogo.png" // replace with your logo path
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
              <Stack spacing={3}>
                <TextField
                  label="Username / Email"
                  variant="outlined"
                  fullWidth
                  size="medium"
                />
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  size="medium"
                />
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                />
                <Button
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
            </Paper>
          </Box>
        </div>
      </div>
    </>
  );
}
