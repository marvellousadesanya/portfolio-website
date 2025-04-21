import { Box } from "@mui/material";
import { ImageSection, TextSection } from "./ui";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const LegalBuddyProject = () => {
  const containerRef = useRef(null);
  const textSectionRef = useRef(null);
  const imageSectionRef = useRef(null);

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      // Create a timeline for the animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Text section animation
      tl.from(textSectionRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Image section animation
      tl.from(
        imageSectionRef.current,
        {
          x: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.7"
      ); // Start slightly before the text animation completes
    },
    { scope: containerRef }
  );

  return (
    <Box ref={containerRef}>
      <Box
        sx={{
          paddingX: {
            xs: "20px",
            md: "30px",
            lg: "100px",
            xl: "110px",
            "2xl": "120px",
          },
          paddingTop: "100px",
          gap: "20px",
          bgcolor: "#0A99A1",
          display: "flex",
          justifyContent: "center",
        }}>
        <Box
          sx={{
            paddingX: {
              xs: "20px",
              md: "70px",
              lg: "20px",
              xl: "80px",
              "2xl": "120px",
            },
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: "80px",
          }}>
          <Box ref={textSectionRef}>
            <TextSection />
          </Box>
          <Box ref={imageSectionRef}>
            <ImageSection />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
