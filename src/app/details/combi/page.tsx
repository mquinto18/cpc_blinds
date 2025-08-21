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
  const [blindType, setBlindType] = useState("premium-blackout");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(""); // 👈 track color
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    router.back();
  };

  // Blind type -> images -> each image has a name + its own colors
  const blindsData: Record<
    string,
    { image: string; name: string; colors: string[] }[]
  > = {
    "semi-blackout": [
      {
        image: "/combi10.jpg",
        name: "Semi-Blackout - Woodlook Prime",
        colors: [
          "red",
          "blue",
          "green",
          "orange",
          "purple",
          "teal",
          "pink",
          "yellow",
          "gray",
        ],
      },
      {
        image: "/combi10.jpg",
        name: "Semi-Blackout - Woodlook Eluxe",
        colors: [
          "red",
          "blue",
          "green",
          "orange",
          "purple",
          "teal",
          "pink",
          "yellow",
          "gray",
        ],
      },
      {
        image: "/combi10.jpg",
        name: "Semi-Blackout - Natural Linen",
        colors: [
          "red",
          "blue",
          "green",
          "orange",
          "purple",
          "teal",
          "pink",
          "yellow",
          "gray",
        ],
      },
      {
        image: "/combi11.jpg",
        name: "Semi-Blackout - Silk",
        colors: [
          "brown",
          "beige",
          "khaki",
          "olive",
          "tan",
          "linen",
          "wheat",
          "ivory",
          "goldenrod",
        ],
      },
      {
        image: "/combi12.jpg",
        name: "Semi-Blackout - Vega",
        colors: [
          "black",
          "darkgray",
          "slategray",
          "midnightblue",
          "maroon",
          "dimgray",
          "navy",
          "darkslateblue",
          "silver",
        ],
      },
      {
        image: "/combi12.jpg",
        name: "Semi-Blackout - Trilogy",
        colors: [
          "black",
          "darkgray",
          "slategray",
          "midnightblue",
          "maroon",
          "dimgray",
          "navy",
          "darkslateblue",
          "silver",
        ],
      },
      {
        image: "/combi12.jpg",
        name: "Semi-Blackout - Timber",
        colors: [
          "black",
          "darkgray",
          "slategray",
          "midnightblue",
          "maroon",
          "dimgray",
          "navy",
          "darkslateblue",
          "silver",
        ],
      },
      {
        image: "/combi12.jpg",
        name: "Semi-Blackout - Losa Wood",
        colors: [
          "black",
          "darkgray",
          "slategray",
          "midnightblue",
          "maroon",
          "dimgray",
          "navy",
          "darkslateblue",
          "silver",
        ],
      },
      {
        image: "/combi12.jpg",
        name: "Semi-Blackout - Kingswood",
        colors: [
          "black",
          "darkgray",
          "slategray",
          "midnightblue",
          "maroon",
          "dimgray",
          "navy",
          "darkslateblue",
          "silver",
        ],
      },
      {
        image: "/combi12.jpg",
        name: "Semi-Blackout - Crescendo",
        colors: [
          "black",
          "darkgray",
          "slategray",
          "midnightblue",
          "maroon",
          "dimgray",
          "navy",
          "darkslateblue",
          "silver",
        ],
      },
    ],
    "natural-basic": [
      {
        image: "/1.jpg",
        name: "Natural Series",
        colors: [
          "lightblue",
          "skyblue",
          "aqua",
          "turquoise",
          "lightseagreen",
          "powderblue",
          "steelblue",
          "dodgerblue",
          "cadetblue",
        ],
      },
      {
        image: "/2.jpg",
        name: "Natural - Basic Color",
        colors: [
          "tan",
          "peru",
          "chocolate",
          "sienna",
          "saddlebrown",
          "rosybrown",
          "burlywood",
          "bisque",
          "moccasin",
        ],
      },
    ],
    "premium-blackout": [
      {
        image: "/3.jpg",
        name: "Premium Blackout - Luxury",
        colors: [
          "black",
          "dimgray",
          "gray",
          "darkslategray",
          "slategray",
          "lightslategray",
          "silver",
          "gainsboro",
          "whitesmoke",
        ],
      },
      {
        image: "/4.jpg",
        name: "Premium Blackout - Hannover",
        colors: [
          "navy",
          "blue",
          "mediumblue",
          "royalblue",
          "cornflowerblue",
          "deepskyblue",
          "dodgerblue",
          "skyblue",
          "steelblue",
        ],
      },
      {
        image: "/5.jpg",
        name: "Premium Blackout - Picasso",
        colors: [
          "crimson",
          "firebrick",
          "darkred",
          "indianred",
          "lightcoral",
          "salmon",
          "darksalmon",
          "tomato",
          "orangered",
        ],
      },
      {
        image: "/5.jpg",
        name: "Premium Blackout - Majesty",
        colors: [
          "crimson",
          "firebrick",
          "darkred",
          "indianred",
          "lightcoral",
          "salmon",
          "darksalmon",
          "tomato",
          "orangered",
        ],
      },
      {
        image: "/5.jpg",
        name: "Premium Blackout - Prima-S",
        colors: [
          "crimson",
          "firebrick",
          "darkred",
          "indianred",
          "lightcoral",
          "salmon",
          "darksalmon",
          "tomato",
          "orangered",
        ],
      },
      {
        image: "/5.jpg",
        name: "Premium Blackout - Ultima",
        colors: [
          "crimson",
          "firebrick",
          "darkred",
          "indianred",
          "lightcoral",
          "salmon",
          "darksalmon",
          "tomato",
          "orangered",
        ],
      },
      {
        image: "/5.jpg",
        name: "Premium Blackout - Adeline",
        colors: [
          "crimson",
          "firebrick",
          "darkred",
          "indianred",
          "lightcoral",
          "salmon",
          "darksalmon",
          "tomato",
          "orangered",
        ],
      },
    ],
  };

  const handleNext = () => {
    const total = blindsData[blindType].length;
    const newIndex = (currentImageIndex + 1) % total;
    setCurrentImageIndex(newIndex);
    setSelectedColor(""); // reset on new image
  };

  const handlePrev = () => {
    const total = blindsData[blindType].length;
    const newIndex = (currentImageIndex - 1 + total) % total;
    setCurrentImageIndex(newIndex);
    setSelectedColor(""); // reset on new image
  };

  const handleBlindChange = (value: string) => {
    setBlindType(value);
    setCurrentImageIndex(0);
    setSelectedColor("");
  };

  const currentData = blindsData[blindType][currentImageIndex];

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
              Korean COMBI Blinds
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
            onChange={(e) => handleBlindChange(e.target.value)}
          >
            <MenuItem value="premium-blackout">
              Premium Blackout Blinds (Our best seller)
            </MenuItem>
            <MenuItem value="semi-blackout">Semi-Blackout Blinds</MenuItem>
            <MenuItem value="natural-basic">Natural Basic Blinds</MenuItem>
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
          {/* Image with slider */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* 👇 Name above the image */}
            <Typography
              variant="subtitle1"
              sx={{
                mb: 2,
                fontWeight: "bold",
                fontSize: "1.2rem",
                textAlign: "center",
              }}
            >
              {currentData.name}
            </Typography>

            <Box
              sx={{
                position: "relative",
                width: { xs: "100%", md: "auto" },
                maxWidth: 900,
                height: 500,
                borderRadius: 2,
                overflow: "hidden",
                backgroundColor: selectedColor || "transparent", // 👈 apply selected color
              }}
            >
              <Box
                component="img"
                src={currentData.image}
                alt={currentData.name}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: selectedColor ? 0.85 : 1, // 👈 tint effect
                  transition: "opacity 0.3s",
                }}
              />
            </Box>

            {/* Selected color label */}
            {selectedColor && (
              <Typography sx={{ mt: 1, fontStyle: "italic" }}>
                Selected color: {selectedColor}
              </Typography>
            )}

            {/* Navigation */}
            <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
              <Button variant="outlined" onClick={handlePrev}>
                Previous
              </Button>
              <Button variant="outlined" onClick={handleNext}>
                Next
              </Button>
            </Box>
          </Box>

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
            {currentData.colors.map((color, index) => (
              <Box
                key={index}
                onClick={() => setSelectedColor(color)}
                sx={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  bgcolor: color,
                  borderRadius: 1,
                  border:
                    selectedColor === color
                      ? "3px solid black"
                      : "1px solid #ccc",
                  cursor: "pointer",
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
