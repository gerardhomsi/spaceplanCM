import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import navLogo from "../../images/logo.png";
import fbLogo from "../../icons/facebook.png";
import igLogo from "../../icons/instagram.png";

const pages = [
  { label: "Home", link: "/" },
  { label: "Services", link: "/services" },
  { label: "Projects", link: "/projects" },
  { label: "Gallery", link: "/gallery" },
  { label: "About", link: "/about" },
  { label: "Contact", link: "/contact" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img
              src={navLogo}
              alt="logo"
              style={{ width: 70, height: 60, marginRight: 10 }}
            />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 2,
              color: "rgb(252, 252, 252)",
              textDecoration: "none",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                color: "rgb(0, 48, 126)",
              },
            }}
            style={{
              fontWeight: 700,
              letterSpacing: ".1rem",
              justifyContent: "flex-start",
            }}
          >
            SpacePlanCM
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    component={Link}
                    to={page.link}
                    style={{
                      textDecoration: "none",
                      color: "rgb(0, 48, 126)",
                    }}
                  >
                    {page.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img
              src={navLogo}
              alt="Logo"
              style={{
                width: 70,
                height: 60,
                mr: 2,
                backgroundColor: "inherit",
              }}
            />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              color: "rgb(252, 252, 252)",
              textDecoration: "none",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                color: "rgb(0, 48, 126)",
              },
            }}
            style={{
              fontWeight: 700,
              letterSpacing: ".1rem",
            }}
          >
            SpacePlanCM
          </Typography>
          <Box
            sx={{
              my: 2,
              display: { md: "none", xs: "flex" },
            }}
          >
            <img
              src={fbLogo}
              alt="facebook Logo"
              style={{ width: 30, height: 30, marginLeft: 10 }}
            />
            <img
              src={igLogo}
              alt="Instagram Logo"
              style={{ width: 30, height: 30, marginLeft: 15 }}
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Link
                to={page.link}
                key={page.label}
                onClick={handleCloseNavMenu}
                style={{ textDecoration: "none", marginLeft: "20px" }}
              >
                <Button
                  sx={{
                    my: 2,
                    color: "rgb(252, 252, 252)",
                    display: "block",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      color: "rgb(0, 48, 126)",
                      fontWeight: "600",
                    },
                  }}
                >
                  {page.label}
                </Button>
              </Link>
            ))}
          </Box>
          <Box
            sx={{
              my: 2,
              display: { md: "flex", xs: "none" },
            }}
          >
            <img
              src={fbLogo}
              alt="facebook Logo"
              style={{ width: 30, height: 30, marginLeft: 10 }}
            />
            <img
              src={igLogo}
              alt="Instagram Logo"
              style={{ width: 30, height: 30, marginLeft: 15 }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
