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
  const [blindType, setBlindType] = useState("natural-accordion-door");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [variantIndex, setVariantIndex] = useState(0); // 👈 track variant slideshow
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    router.back();
  };

  // Blind type -> images -> each image has a name + its own colors
  const blindsData: Record<
    string,
    { image: string; name: string; images: string[] }[]
  > = {
    "natural-accordion-door": [
      {
        image: "/accordion/FD/10.3cm/10.3cmimg.jpg",
        name: "Accordion Door - FD",
        images: ["/accordion/FD/10.3cm/10.3cmdet.jpg"],
      },
      {
        image: "/accordion/FD/12.5cm/12.5cm img.jpg",
        name: "Accordion Door - FD",
        images: ["/accordion/FD/12.5cm/12.5cm det.jpg"],
      },
      {
        image: "/accordion/FRENCH/french img.jpg",
        name: "Accordion Door - French",
        images: ["/accordion/FRENCH/french det.jpg"],
      },
    ],
  };

  const handleNext = () => {
    const total = blindsData[blindType].length;
    setCurrentImageIndex((prev) => (prev + 1) % total);
    setVariantIndex(0); // reset variant when switching type
  };

  const handlePrev = () => {
    const total = blindsData[blindType].length;
    setCurrentImageIndex((prev) => (prev - 1 + total) % total);
    setVariantIndex(0);
  };

  const handleBlindChange = (value: string) => {
    setBlindType(value);
    setCurrentImageIndex(0);
    setVariantIndex(0);
  };

  const handleNextVariant = () => {
    const total = currentData.images.length;
    setVariantIndex((prev) => (prev + 1) % total);
  };

  const handlePrevVariant = () => {
    const total = currentData.images.length;
    setVariantIndex((prev) => (prev - 1 + total) % total);
  };

  const currentData = blindsData[blindType][currentImageIndex];
  const mainImage = currentData.image;
  const variantImage = currentData.images[variantIndex];

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
              Accordion/Folding Doors
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
            <MenuItem value="natural-accordion-door">Accordion Door</MenuItem>
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
          {/* Main Image (Left) */}
          <Box
            sx={{
              flex: 1, // take half width
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
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
              component="img"
              src={mainImage}
              alt={currentData.name}
              sx={{
                width: "100%",
                height: { xs: 300, md: 500 }, // responsive height
                borderRadius: 2,
                objectFit: "cover", // keep cover for main image
              }}
            />
            <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
              <Button
                variant="outlined"
                onClick={handlePrev}
                disabled={currentImageIndex === 0}
              >
                Previous
              </Button>
              <Button
                variant="outlined"
                onClick={handleNext}
                disabled={
                  currentImageIndex === blindsData[blindType].length - 1
                }
              >
                Next
              </Button>
            </Box>
          </Box>

          {/* Variant Image (Right, one at a time) */}
          <Box
            sx={{
              flex: 1, // take half width
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                mb: 2,
                fontWeight: "bold",
                fontSize: "1rem",
                textAlign: "center",
              }}
            >
              Variant Sample
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: { xs: 300, md: 500 }, // container height
                borderRadius: 2,
                backgroundColor: "#f5f5f5", // optional: neutral bg behind image
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={variantImage}
                alt={`variant-${variantIndex}`}
                sx={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain", // ✅ ensures full image is visible
                  borderRadius: 2,
                }}
              />
            </Box>
            <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
              <Button
                variant="outlined"
                onClick={handlePrevVariant}
                disabled={variantIndex === 0}
              >
                Prev Sample
              </Button>
              <Button
                variant="outlined"
                onClick={handleNextVariant}
                disabled={variantIndex === currentData.images.length - 1}
              >
                Next Sample
              </Button>
            </Box>
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
