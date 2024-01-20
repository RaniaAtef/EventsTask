"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  { label: "Home", path: "/" },
  { label: "Login", path: "/login" },
];

function NavBar() {
  const isLoggedIn = localStorage.getItem("token");
  const pathname = usePathname();
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "end" },
            }}
          >
            {/* {pages.map((page) => ( */}
            <Link href="/" passHref>
              <Button
                sx={{
                  my: 2,
                  color: pathname === "/" ? "primary.light" : "white",
                  display: "block",
                }}
              >
                Home
              </Button>
            </Link>
            <Link href="/login" passHref>
              {isLoggedIn ? (
                <Button
                  sx={{
                    my: 2,
                    color: pathname === "/login" ? "primary.light" : "white",
                    display: "block",
                  }}
                  onClick={() => localStorage.removeItem("token")}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  sx={{
                    my: 2,
                    color: pathname === "/login" ? "primary.light" : "white",
                    display: "block",
                  }}
                >
                  Login
                </Button>
              )}
            </Link>
            {/* ))} */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
