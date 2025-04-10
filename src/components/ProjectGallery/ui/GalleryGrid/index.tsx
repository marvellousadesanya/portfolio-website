import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import project1 from "../../../../assets/project-1.png";
import project2 from "../../../../assets/project-2.png";
import project3 from "../../../../assets/project-3.png";

export const GalleryGrid = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box width="100%">
      <Stack direction={isMobile ? "column" : "row"} spacing={2}>
        {/* First column with one tall image */}
        <Box
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
          <Box sx={{ flex: 1 }}>
            <img
              src={project2}
              alt="project2"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>

          {/* Second image takes 50% of height */}
          <Box sx={{ flex: 1 }}>
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
