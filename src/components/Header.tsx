import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import ellipse from "../assets/ellipse.svg";
import logo from "../assets/logo.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const container = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const logoRef = useRef(null);
  const contactRef = useRef(null);
  const ellipse1Ref = useRef(null);
  const ellipse2Ref = useRef(null);
  const ellipse3Ref = useRef(null);

  useGSAP(
    () => {
      // Create a timeline for better control
      const tl = gsap.timeline();

      // Logo animation
      tl.from(logoRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Text animations with stagger
      tl.from(
        nameRef.current,
        {
          x: -100,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );

      tl.from(
        titleRef.current,
        {
          x: -100,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      );

      // Line animation
      tl.from(
        lineRef.current,
        {
          width: 0,
          duration: 0.8,
          ease: "power1.inOut",
        },
        "-=0.4"
      );

      // Contact button animation
      tl.from(
        contactRef.current,
        {
          y: -30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.6"
      );

      // Ellipse animations
      tl.from(
        [ellipse1Ref.current, ellipse2Ref.current, ellipse3Ref.current],
        {
          scale: 0,
          opacity: 0,
          rotation: "+=90",
          duration: 1.2,
          stagger: 0.2,
          ease: "elastic.out(1, 0.3)",
        },
        "-=0.8"
      );
    },
    { scope: container }
  );

  const handleContactClick = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box ref={container}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
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
            zIndex: 2,
          }}>
          <Typography
            ref={nameRef}
            sx={{
              fontWeight: 700,
              color: "black",
              fontSize: { xs: "16px", md: "30px" },
            }}>
            Ovenseri Esther Itohan
          </Typography>
          <Typography
            ref={titleRef}
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
              ref={lineRef}
              bgcolor="black"
              width={{ xs: "70px", md: "100px" }}
              height={{ xs: "23px", md: "10px" }}
              borderRadius="10px"
            />
          </Box>
        </Box>

        <img
          ref={logoRef}
          src={logo}
          alt="logo"
          style={{
            width: isMobile ? "50px" : "70px",
            height: "auto",
            position: "absolute",
            left: "20px",
            top: "20px",
            zIndex: 2,
          }}
        />
        <img
          ref={ellipse1Ref}
          src={ellipse}
          alt="ellipse"
          style={{
            width: isMobile ? "120px" : "200px",
            height: isMobile ? "120px" : "200px",
            position: "absolute",
            right: isMobile ? "-10%" : "-5%",
            bottom: isMobile ? "50%" : "-5%",
          }}
        />
        <img
          ref={ellipse2Ref}
          src={ellipse}
          alt="ellipse"
          style={{
            width: isMobile ? "120px" : "200px",
            height: isMobile ? "120px" : "200px",
            position: "absolute",
            top: isMobile ? "-10%" : "-15%",
            right: isMobile ? "20%" : "50%",
          }}
        />
        <img
          ref={ellipse3Ref}
          src={ellipse}
          alt="ellipse"
          style={{
            width: "200px",
            height: "200px",
            position: "absolute",
            left: isMobile ? "-20%" : "-7%",
            top: isMobile ? "65%" : "50%",
            rotate: "90deg",
          }}
        />

        <Box
          onClick={handleContactClick}
          ref={contactRef}
          sx={{
            cursor: "pointer",
            display: "block",
            position: "absolute",
            right: "10px",
            top: "20px",
            fontSize: "12px",
            lineHeight: 1,
          }}>
          <Typography
            fontFamily="Poppins"
            fontWeight={600}
            color="black"
            fontSize={{ xs: "12px", md: "16px" }}>
            Contact Me
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
