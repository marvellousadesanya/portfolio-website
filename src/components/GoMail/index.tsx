import { Box, Stack, Typography } from "@mui/material";
import goMail from "../../assets/gomail.png";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const GoMail = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const linkRef = useRef(null);
  const imageRef = useRef(null);

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      // Create a timeline for the animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // Title animation
      tl.from(titleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      });

      // Description animation
      tl.from(
        descriptionRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.4"
      );

      // Link animation
      tl.from(
        linkRef.current,
        {
          y: 10,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      );

      // Image animation
      tl.from(
        imageRef.current,
        {
          scale: 0.9,
          opacity: 0,
          duration: 1,
          ease: "back.out(1.2)",
        },
        "-=0.6"
      );
    },
    { scope: containerRef }
  );

  return (
    <Box
      ref={containerRef}
      sx={{
        bgcolor: "#291770",
        paddingX: { xs: "20px", md: "100px" },
        paddingY: { xs: "70px", md: "100px" },
        display: "flex",
        justifyContent: "center",
      }}>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          width: "100%",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
        }}>
        <Box sx={{ color: "white" }}>
          <Typography
            ref={titleRef}
            sx={{
              fontSize: { xs: "30px", md: "60px" },
              fontWeight: 500,
              textAlign: { xs: "center", md: "left" },
            }}>
            GoMail
          </Typography>
          <Typography
            ref={descriptionRef}
            sx={{
              fontSize: "20px",
              fontWeight: 500,
              maxWidth: "500px",
              mt: "20px",
              textAlign: { xs: "center", md: "left" },
            }}>
            An e-commerce app allowing users to search for products in their
            preferred stores, compare prices, and discover alternatives in other
            stores if items are not found.An e-commerce app allowing users to
            search for products in their preferred stores, compare prices, and
            discover alternatives in other stores if items are not found.
          </Typography>
          <Typography
            ref={linkRef}
            sx={{
              mt: "20px",
              color: "white",
              fontWeight: 500,
              textDecoration: "underline",
              fontSize: "20px",
              textAlign: { xs: "center", md: "left" },
              cursor: "pointer",
            }}>
            View Project
          </Typography>
        </Box>

        <Box sx={{ paddingTop: { xs: "60px", md: 0 } }}>
          <img
            ref={imageRef}
            src={goMail}
            alt="goMail"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Stack>
    </Box>
  );
};
