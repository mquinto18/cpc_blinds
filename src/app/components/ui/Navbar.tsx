"use client";

import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = ["Home", "Products", "Contacts"];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      if (!isMobile) {
        setScrolled(window.scrollY > 10);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // ✅ Reusable scroll handler for both desktop + mobile
  const handleScrollTo = (item: string) => {
    setActive(item);

    if (item === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (item === "Products") {
      const section = document.getElementById("products");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (item === "Contacts") {
      const section = document.getElementById("contacts");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }

    // 👇 Close drawer after click in mobile
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  const drawer = (
    <Box
      sx={{
        width: 250,
        bgcolor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(10px)",
        height: "100%",
        p: 2,
      }}
      role="presentation"
    >
      <List>
        {menuItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              onClick={() => handleScrollTo(item)} // ✅ smooth scroll here
              sx={{
                borderRadius: 2,
                backgroundColor: active === item ? "white" : "transparent",
                color: active === item ? "black" : "white",
                fontWeight: active === item ? "bold" : "normal",
                my: 0.5,
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                },
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled ? "rgba(0,0,0,0.0)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          boxShadow: "none",
          transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
        }}
      >
        <Toolbar
          sx={{
            borderBottom: "1px solid rgba(255,255,255,0.2)",
            mx: { xs: 2, md: 8 },
            px: 0,
            mt: 2,
          }}
        >
          {/* Logo Image */}
          <Box sx={{ flexGrow: 1, cursor: "pointer" }}>
            <img
              src="/navLogo.jpeg"
              alt="Logo"
              style={{
                height: 50,
                width: 50,
                borderRadius: "50%",
                objectFit: "cover",
                backgroundColor: "white",
                padding: 2,
              }}
            />
          </Box>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                PaperProps={{
                  sx: {
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  },
                }}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 3 }}>
              {menuItems.map((item) => (
                <Button
                  key={item}
                  onClick={() => handleScrollTo(item)} // ✅ smooth scroll here too
                  sx={{
                    textTransform: "none",
                    fontSize: "16px",
                    px: 2,
                    borderRadius: "9999px",
                    backgroundColor: active === item ? "white" : "transparent",
                    color:
                      active === item
                        ? "black"
                        : scrolled && !isMobile
                        ? "black"
                        : "white",
                    fontWeight: active === item ? "bold" : "normal",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "black",
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
