"use client";
import {
  Modal,
  Box,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CombiDetailsModal() {
  const [open, setOpen] = useState(true);
  const [blindType, setBlindType] = useState("Roller-Blinds-Semi-Blackout");
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    router.back();
  };

  const blindImages: Record<string, string> = {
    "Roller-Blinds-Semi-Blackout": "/roller2.jpeg",
    "Roller-Blinds-Sunscreen": "/roller4.jpeg",
    "Roller-Blinds-Blackout": "/roller5.jpg",
  };

  const boxColors = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "teal",
    "pink",
    "yellow",
    "gray",
  ];

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          width: { xs: "95%", sm: "900px", md: "1200px", lg: "1300px" },
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* Header */}
        <Typography variant="h6" component="h2">
          <div className="flex flex-col gap-4 mt-8">
            <span className="bg-black h-[12px] w-[150px] rounded-full "></span>
            <span className="text-black text-base md:text-2xl lg:text-4xl leading-7 md:leading-14">
              Roller Blinds
            </span>
          </div>
        </Typography>

        {/* Dropdown */}
        <FormControl fullWidth className="mt-6">
          <InputLabel id="blind-type-label">Choose Blind Type</InputLabel>
          <Select
            labelId="blind-type-label"
            value={blindType}
            label="Choose Blind Type"
            onChange={(e) => setBlindType(e.target.value)}
          >
            <MenuItem value="Roller-Blinds-Semi-Blackout">
              Roller Blinds Semi Blackout
            </MenuItem>
            <MenuItem value="Roller-Blinds-Sunscreen">
              Roller Blinds Sunscreen
            </MenuItem>
            <MenuItem value="Roller-Blinds-Blackout">
              Premium Blackout Blinds (Our best seller)
            </MenuItem>
          </Select>
        </FormControl>

        {/* Image + 9 boxes */}
        <Box
          sx={{
            mt: 4,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 6 },
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          {/* Image */}
          <Box
            component="img"
            src={blindImages[blindType]}
            alt="Combi Blinds Sample"
            sx={{
              width: { xs: "100%", md: "auto" },
              maxWidth: 900,
              height: 500,
              objectFit: "cover",
              borderRadius: 2,
            }}
          />

          {/* Right side 3x3 boxes */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(3, 1fr)",
              gap: 4,
              width: { xs: "100%", md: 500 },
            }}
          >
            {boxColors.map((color, index) => (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  aspectRatio: "1 / 1", // always square
                  bgcolor: color,
                  borderRadius: 1,
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Close button */}
        <Button onClick={handleClose} sx={{ mt: 4 }} variant="contained">
          Close
        </Button>
      </Box>
    </Modal>
  );
}
