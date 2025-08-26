"use client";

import React from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import { Email } from "@mui/icons-material";

export default function MessageNowButton() {
  const actions = [
    {
      icon: <FacebookIcon />,
      name: "Messenger",
      url: "https://www.facebook.com/messages/t/106034588443768",
    },
    {
      icon: <InstagramIcon />,
      name: "Instagram",
      url: "https://www.instagram.com/direct/t/17842962939322115/",
    },
    {
      icon: <Email />,
      name: "Email",
      url: "mailto:cpcmnlwindow@gmail.com",
    },
    { icon: <PhoneIcon />, name: "Call Us", url: "tel:+639164180061" },
  ];

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <SpeedDial
      ariaLabel="Message Now"
      sx={{ position: "fixed", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon icon={<ChatIcon />} />}
      direction="left" // makes it expand horizontally
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => handleClick(action.url)}
        />
      ))}
    </SpeedDial>
  );
}
