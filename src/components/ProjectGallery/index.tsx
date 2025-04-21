import { Box, Typography } from "@mui/material";
import { GalleryGrid } from "./ui/GalleryGrid";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ProjectGallery = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Grid container animation
      gsap.from(gridRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <Box
      ref={containerRef}
      sx={{
        paddingX: { xs: "20px", md: "100px" },
        paddingY: { xs: "90px", md: "100px" },
        bgcolor: "#E1E3DE",
      }}>
      <Typography
        ref={titleRef}
        sx={{
          fontSize: { xs: "30px", md: "50px" },
          fontWeight: 500,
          textAlign: { xs: "center", md: "left" },
        }}>
        Project Gallery
      </Typography>

      <Box
        ref={gridRef}
        sx={{
          mt: "50px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}>
        <GalleryGrid />
      </Box>
    </Box>
  );
};
