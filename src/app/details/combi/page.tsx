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
  const [variantIndex, setVariantIndex] = useState(0); // 👈 track variant slideshow
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const minSwipeDistance = 50;

  // --- For Main Blinds ---
  const onMainTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(0);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onMainTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onMainTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > minSwipeDistance) {
      handleNext(); // swipe left
    } else if (distance < -minSwipeDistance) {
      handlePrev(); // swipe right
    }
  };

  // --- For Variants ---
  const onVariantTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(0);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onVariantTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onVariantTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > minSwipeDistance) {
      handleNextVariant();
    } else if (distance < -minSwipeDistance) {
      handlePrevVariant();
    }
  };
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    router.back();
  };

  // Blind type -> each has default image + list of variant images
  const blindsData: Record<
    string,
    { image: string; name: string; images: string[] }[]
  > = {
    "semi-blackout": [
      {
        image: "/koreanCombi/semiblackout/PRIMEWOOD/woodlookPrimeIMG.png",
        name: "Semi Blackout - Woodlook Prime",
        images: ["/koreanCombi/semiblackout/PRIMEWOOD/woodlookPrimeColor.png"],
      },
      {
        image: "/koreanCombi/semiblackout/ELUXE/woodlookEluxeIMG.png",
        name: "Semi Blackout - Woodlook Eluxe",
        images: ["/koreanCombi/semiblackout/ELUXE/woodlookEluxeColor.png"],
      },
      {
        image: "/koreanCombi/semiblackout/LINEN/linenIMG.png",
        name: "Semi Blackout - Natural Linen",
        images: ["/koreanCombi/semiblackout/LINEN/linenColor.png"],
      },
      {
        image: "/koreanCombi/semiblackout/SILK/silkIMG.png",
        name: "Semi Blackout - Silk",
        images: ["/koreanCombi/semiblackout/SILK/silkColor.png"],
      },
      {
        image: "/koreanCombi/semiblackout/VEGA/vegaIMG.png",
        name: "Semi Blackout - Vega",
        images: ["/koreanCombi/semiblackout/VEGA/vegaColor.png"],
      },
      {
        image: "/koreanCombi/semiblackout/TRILOGY/trilogyIMG.png",
        name: "Semi Blackout - Trilogy",
        images: [
          "/koreanCombi/semiblackout/TRILOGY/trilogyColor.png",
          "/koreanCombi/semiblackout/TRILOGY/trilogyColor1.png",
        ],
      },
      {
        image: "/koreanCombi/semiblackout/TIMBER/timberIMG.png",
        name: "Semi Blackout - Timber",
        images: ["/koreanCombi/semiblackout/TIMBER/timberColor.png"],
      },
      {
        image: "/koreanCombi/semiblackout/LOSA/losaWoodIMG.png",
        name: "Semi Blackout - Losa Wood",
        images: ["/koreanCombi/semiblackout/LOSA/losaWoodColor.png"],
      },
      {
        image: "/koreanCombi/semiblackout/KINGSWOOD/KINGSWOOD.jpg",
        name: "Semi Blackout - Kingswood",
        images: ["/koreanCombi/semiblackout/KINGSWOOD/COLOR.jpg"],
      },
      {
        image: "/koreanCombi/semiblackout/CRESENDO/CRESENDO.jpg",
        name: "Semi Blackout - Cresendo",
        images: ["/koreanCombi/semiblackout/CRESENDO/COLOR.jpg"],
      },
    ],
    "natural-basic": [
      {
        image: "/koreanCombi/natural/NATURAL/naturalIMG.png",
        name: "Natural Basic - Natural",
        images: [
          "/koreanCombi/natural/NATURAL/naturalColor.png",
          "/koreanCombi/natural/NATURAL/naturalIMG1.png",
          "/koreanCombi/natural/NATURAL/naturalIMG2.png",
        ],
      },
    ],
    "premium-blackout": [
      {
        image: "/koreanCombi/blackout/LUXURY/luxuryIMG.png",
        name: "Premium Blackout - Luxury",
        images: ["/koreanCombi/blackout/LUXURY/luxuryColor.png"],
      },
      {
        image: "/koreanCombi/blackout/HANNOVER/hannoverIMG.png",
        name: "Premium Blackout - Hannover",
        images: ["/koreanCombi/blackout/HANNOVER/hannoverColor.png"],
      },
      {
        image: "/koreanCombi/blackout/PICASSO/PicassoIMG.png",
        name: "Premium Blackout - Picasso",
        images: ["/koreanCombi/blackout/PICASSO/PicassoColor.png"],
      },
      {
        image: "/koreanCombi/blackout/MAJESTY/majestyIMG.png",
        name: "Premium Blackout - Majesty",
        images: ["/koreanCombi/blackout/MAJESTY/majestyColor.png"],
      },
      {
        image: "/koreanCombi/blackout/PRIMA-S/primaSIMG.png",
        name: "Premium Blackout - Prima-S",
        images: ["/koreanCombi/blackout/PRIMA-S/primaSColor.png"],
      },
      {
        image: "/koreanCombi/blackout/ULTIMA/ultimaIMG.png",
        name: "Premium Blackout - Ultima",
        images: ["/koreanCombi/blackout/ULTIMA/ultimaColor.png"],
      },
      {
        image: "/koreanCombi/blackout/ADELINE/adellineIIMG.png",
        name: "Premium Blackout - Adeline",
        images: ["/koreanCombi/blackout/ADELINE/adellineColor.png"],
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
              Premium-Blackout Blinds (Our best seller)
            </MenuItem>
            <MenuItem value="semi-blackout">Semi-Blackout Blinds</MenuItem>
            <MenuItem value="natural-basic">Natural-Basic Blinds</MenuItem>
          </Select>
        </FormControl>

        {/* Main Content: left main image + right variant image */}
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
              onTouchStart={onMainTouchStart}
              onTouchMove={onMainTouchMove}
              onTouchEnd={onMainTouchEnd}
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
              onTouchStart={onVariantTouchStart}
              onTouchMove={onVariantTouchMove}
              onTouchEnd={onVariantTouchEnd}
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
