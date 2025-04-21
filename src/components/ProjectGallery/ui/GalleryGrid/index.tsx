import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import project1 from "../../../../assets/project-1.png";
import project2 from "../../../../assets/project-2.png";
import project3 from "../../../../assets/project-3.png";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const GalleryGrid = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const containerRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(
    () => {
      // Create a timeline for the animations
      const tl = gsap.timeline();

      // First project animation
      tl.from(project1Ref.current, {
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // Second project animation
      tl.from(
        project2Ref.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      );

      // Third project animation
      tl.from(
        project3Ref.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      );
    },
    { scope: containerRef }
  );

  return (
    <Box ref={containerRef} width="100%">
      <Stack direction={isMobile ? "column" : "row"} spacing={2}>
        {/* First column with one tall image */}
        <Box
          ref={project1Ref}
          sx={{
            width: "100%",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1.5px solid #0B91D9",
          }}>
          <img
            src={project1}
            alt="project1"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        {/* Second column with two stacked images of equal height */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            gap: 2,
            height: isMobile ? "auto" : "100%",
          }}>
          {/* First image takes 50% of height */}
          <Box ref={project2Ref} sx={{ flex: 1 }}>
            <img
              src={project2}
              alt="project2"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>

          {/* Second image takes 50% of height */}
          <Box ref={project3Ref} sx={{ flex: 1 }}>
            <img
              src={project3}
              alt="project3"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
