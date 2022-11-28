import Logo from "../svg/SpaceX-Logo.wine.svg";
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./banner.css";
import { CSSTransition } from "react-transition-group";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Container, Toolbar, AppBar } from "@mui/material";

export default function Banner() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  return (
    <Box sx={{ paddingBottom: "100px" }}>
      <AppBar
        sx={{
          backgroundColor: {
            xs: "#FBE9E7",
            sm: "#FBE9E7",
          },
        }}
      >
        <Container
          sx={{ display: "flex", justifyContent: "space-evenly" }}
          maxWidth="xl"
        >
          <Box></Box>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "block", lg: "block" },
              height: "60px",
            }}
          >
            <img src={Logo} className="Logo" alt="logo" />
          </Box>
          <Box
            sx={{
              display: "flex",
              paddingTop: "30px",
            }}
          >
            <a style={{ marginRight: "10px" }} href="/">
              RIDESHARE
            </a>
            <a style={{ marginRight: "10px" }} href="/">
              STARLINK
            </a>
            <a style={{ marginRight: "10px" }} href="/" className="shop">
              SHOP
            </a>
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
}