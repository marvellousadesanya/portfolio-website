import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import profile from "../assets/profile-picture.png";
import star from "../assets/star.svg";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Profile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const starRef = useRef(null);

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      // Create a timeline for the animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // Animation starts when the top of the container is 80% from the top of the viewport
          toggleActions: "play none none none",
        },
      });

      // Profile picture animation
      tl.from(imageRef.current, {
        y: 100,
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power3.out",
      });

      // Text animation
      tl.from(
        textRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.6"
      ); // Start a bit before the previous animation ends

      // Star animation
      tl.from(
        starRef.current,
        {
          rotation: -180,
          scale: 0,
          opacity: 0,
          duration: 1.2,
          ease: "elastic.out(1, 0.3)",
        },
        "-=0.8"
      );
    },
    { scope: containerRef }
  );

  return (
    <Box
      ref={containerRef}
      sx={{
        padding: { xs: "20px", md: "100px" },
        display: "flex",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        gap="50px"
        sx={{
          width: "100%",
          py: { xs: "50px", md: 0 },
          alignItems: "center",
        }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            pt: { xs: "90px", md: 0 },
          }}>
          <img
            ref={imageRef}
            src={profile}
            alt="Profile"
            style={{ width: isMobile ? "50%" : "100%" }}
          />
        </Box>
        <Typography
          ref={textRef}
          sx={{
            maxWidth: "696px",
            fontSize: { xs: "20px", md: "40px" },
            textAlign: { xs: "center", md: "left" },
          }}
          className="poppins-medium"
          style={{ fontFamily: '"Poppins", sans-serif', zIndex: 2 }}>
          Hey, I'm Itohan! I'm a UI/UX designer with a knack for detail and a
          love for designing products that are both functional and fun. I
          believe that good design can make a real difference in people's lives,
          and I'm excited to share my work with you.
        </Typography>
      </Stack>

      <img
        ref={starRef}
        src={star}
        alt="star"
        style={{
          position: "absolute",
          bottom: isMobile ? "80%" : 0,
          right: "-10%",
        }}
      />
    </Box>
  );
};
