import { Box, Typography } from "@mui/material";
import hamburgerIcon from "../assets/hamburger.svg";
import ellipse from "../assets/ellipse.svg";
import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: { xs: "flex-start", md: "center" },
          alignItems: "center",
          background: "linear-gradient(to top, #FFFFFF, #98C4EC)",
        }}>
        <Box
          sx={{
            paddingLeft: { xs: "20px", md: "0px" },
            width: { xs: "60%", md: "fit-content" },
          }}>
          <Typography
            sx={{
              fontWeight: 700,
              color: "black",
              fontSize: { xs: "16px", md: "30px" },
            }}>
            Ovenseri Esther Itohan
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 500,
              fontSize: { xs: "55px", md: "100px" },
            }}
            color="black">
            UI/UX Design Portfolio
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Box
              bgcolor="black"
              width={{ xs: "70px", md: "100px" }}
              height={{ xs: "23px", md: "10px" }}
              borderRadius="10px"
            />
          </Box>
        </Box>

        <img
          src={logo}
          alt="logo"
          style={{
            width: "70px",
            height: "20px",
            position: "absolute",
            left: "20px",
            top: "20px",
          }}
        />
        <img
          src={ellipse}
          alt="ellipse"
          style={{
            width: "200px",
            height: "200px",
            position: "absolute",
            right: "-5%",
            bottom: "-5%",
          }}
        />
        <img
          src={ellipse}
          alt="ellipse"
          style={{
            width: "200px",
            height: "200px",
            position: "absolute",
            top: "-15%",
            right: "50%",
          }}
        />
        <img
          src={ellipse}
          alt="ellipse"
          style={{
            width: "200px",
            height: "200px",
            position: "absolute",
            left: "-7%",
            top: "50%",
            rotate: "90deg",
          }}
        />

        <img
          src={hamburgerIcon}
          alt="hamburger"
          style={{
            width: "40px",
            height: "40px",
            display: "block",
            position: "absolute",
            right: "20px",
            top: "20px",
          }}
        />
      </Box>
    </>
  );
};
