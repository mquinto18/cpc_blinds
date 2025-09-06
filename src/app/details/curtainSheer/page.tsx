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
  const [blindType, setBlindType] = useState("Premium-Blackout-Curtain");
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
    "Premium-Blackout-Curtain": [
      {
        image: "/fabric-sheer/premium-blackout/arya/ariaIMG.jpeg",
        name: "Premium Blackout - Aria",
        images: ["/fabric-sheer/premium-blackout/arya/aria.jpeg"],
      },
      {
        image: "/fabric-sheer/premium-blackout/freya/freyaIMG.jpeg",
        name: "Premium Blackout - Freya",
        images: ["/fabric-sheer/premium-blackout/freya/freyaCOLOR.jpeg"],
      },
      {
        image: "/fabric-sheer/premium-blackout/gotham/gothamIMG.jpeg",
        name: "Premium Blackout - Gotham",
        images: ["/fabric-sheer/premium-blackout/gotham/gothamCOLOR.jpeg"],
      },
      {
        image: "/fabric-sheer/premium-blackout/hera/heraIMG.jpeg",
        name: "Premium Blackout - Hera",
        images: ["/fabric-sheer/premium-blackout/hera/heraCOLOR.jpeg"],
      },
      {
        image: "/fabric-sheer/premium-blackout/persia/persiaIMG.jpeg",
        name: "Premium Blackout - Persia",
        images: ["/fabric-sheer/premium-blackout/persia/persiaCOLOR.jpeg"],
      },
      {
        image: "/fabric-sheer/premium-blackout/raffia/raffiaIMG.jpeg",
        name: "Premium Blackout - Raffia",
        images: ["/fabric-sheer/premium-blackout/raffia/raffiaCOLOR.jpeg"],
      },
      {
        image: "/fabric-sheer/premium-blackout/tiffany/tiffanyIMG.jpeg",
        name: "Premium Blackout - Tiffany",
        images: ["/fabric-sheer/premium-blackout/tiffany/tiffanyCOLOR.jpeg"],
      },
      {
        image: "/fabric-sheer/premium-blackout/vesper/vesperIMG.jpeg",
        name: "Premium Blackout - Vesper",
        images: ["/fabric-sheer/premium-blackout/vesper/vesperCOLOR.jpeg"],
      },
    ],
    "Soft-Blackout-Curtain": [
      {
        image: "/fabric-sheer/Semi-Blackout/APHRODITE/aprhoditeIMG.jpeg",
        name: "Soft Blackout - Aphrodite",
        images: ["/fabric-sheer/Semi-Blackout/APHRODITE/aprhoditeVARIANT.jpeg"],
      },
      {
        image: "/fabric-sheer/Semi-Blackout/APHRODITE/aprhoditeIMG1.jpeg",
        name: "Soft Blackout - Aphrodite",
        images: [
          "/fabric-sheer/Semi-Blackout/APHRODITE/aprhoditeVARIANT1.jpeg",
        ],
      },
      {
        image: "/fabric-sheer/Semi-Blackout/ATHENA/athenaIMG.jpeg",
        name: "Soft Blackout - Athena",
        images: ["/fabric-sheer/Semi-Blackout/ATHENA/athenaVARIENT.jpeg"],
      },
      {
        image: "/fabric-sheer/Semi-Blackout/CALYPSO/calysoIMG.jpeg",
        name: "Soft Blackout - Calypso",
        images: ["/fabric-sheer/Semi-Blackout/CALYPSO/calysoVARIANT.jpeg"],
      },
      {
        image: "/fabric-sheer/Semi-Blackout/CASSNOVA/cassanovaIMG.jpeg",
        name: "Soft Blackout - Cassanova",
        images: ["/fabric-sheer/Semi-Blackout/CASSNOVA/cassnovaVARIANT.jpeg"],
      },
      {
        image: "/fabric-sheer/Semi-Blackout/DIANA/DIANA.jpeg",
        name: "Soft Blackout - Diana",
        images: ["/fabric-sheer/Semi-Blackout/DIANA/DIANACOLOR.jpeg"],
      },
      {
        image: "/fabric-sheer/Semi-Blackout/EASTER/easterIMG.jpeg",
        name: "Soft Blackout - Easter",
        images: ["/fabric-sheer/Semi-Blackout/EASTER/easterVARIANT.jpeg"],
      },
      {
        image: "/fabric-sheer/Semi-Blackout/HAVANA/havanaIMG.jpeg",
        name: "Soft Blackout - Havana",
        images: ["/fabric-sheer/Semi-Blackout/HAVANA/havanaVARIANT.jpeg"],
      },
      {
        image: "/fabric-sheer/Semi-Blackout/LUNA/lunaIMG.jpeg",
        name: "Soft Blackout - Luna",
        images: ["/fabric-sheer/Semi-Blackout/LUNA/lungVARIANT.jpeg"],
      },
      {
        image: "/fabric-sheer/Semi-Blackout/MORRIS/morrisIMG.jpeg",
        name: "Soft Blackout - Morris",
        images: ["/fabric-sheer/Semi-Blackout/MORRIS/morrisVARIANT.jpeg"],
      },
      {
        image: "/fabric-sheer/Semi-Blackout/NEPTUNE/neptuneIMG.jpeg",
        name: "Soft Blackout - Neptune",
        images: ["/fabric-sheer/Semi-Blackout/NEPTUNE/NEPTUNE1.jpeg"],
      },
      {
        image: "/fabric-sheer/Semi-Blackout/OXFORD/oxfordIMG.jpeg",
        name: "Soft Blackout - Oxford",
        images: ["/fabric-sheer/Semi-Blackout/OXFORD/oxfordVARIANT.jpeg"],
      },
      {
        image: "/fabric-sheer/Semi-Blackout/THALIA/thaliaIMG.jpeg",
        name: "Soft Blackout - Thalia",
        images: ["/fabric-sheer/Semi-Blackout/THALIA/thaliaVARIANT.jpeg"],
      },
      {
        image: "/fabric-sheer/Semi-Blackout/VELOUR/velourIMG.jpeg",
        name: "Soft Blackout - Velour",
        images: ["/fabric-sheer/Semi-Blackout/VELOUR/VelourVARIANT.jpeg"],
      },
      {
        image: "/fabric-sheer/Semi-Blackout/VENUS/venusIMG.jpeg",
        name: "Soft Blackout - Venus",
        images: ["/fabric-sheer/Semi-Blackout/VENUS/venusVARIANT.jpeg"],
      },
      {
        image: "/fabric-sheer/Semi-Blackout/VICTORIA/victoriaIMG.jpeg",
        name: "Soft Blackout - Victoria",
        images: ["/fabric-sheer/Semi-Blackout/VICTORIA/victoriaVARIANT.jpeg"],
      },
      {
        image: "/fabric-sheer/Semi-Blackout/YARA/yaraIMG.jpeg",
        name: "Soft Blackout - Yara",
        images: ["/fabric-sheer/Semi-Blackout/YARA/yaraVARIANT.jpeg"],
      },
    ],
    "Sheer-Only": [
      {
        image: "/fabric-sheer/sheer-only/sheer.jpeg",
        name: "Sheer Only - Sheer 1",
        images: ["/fabric-sheer/sheer-only/sheercolor.jpeg"],
      },
      {
        image: "/fabric-sheer/sheer-only/sheer1.jpeg",
        name: "Sheer Only - Sheer 2",
        images: ["/fabric-sheer/sheer-only/sheercolor1.jpeg"],
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
              Fabric Curtain & Sheer
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
            <MenuItem value="Premium-Blackout-Curtain">
              Premium-Blackout Curtain
            </MenuItem>
            <MenuItem value="Soft-Blackout-Curtain">
              Soft-Blackout Curtain
            </MenuItem>
            <MenuItem value="Sheer-Only">Sheer Only</MenuItem>
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
