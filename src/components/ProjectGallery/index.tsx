import { Box, Typography } from "@mui/material";
import { GalleryGrid } from "./ui/GalleryGrid";

export const ProjectGallery = () => {
  return (
    <Box
      sx={{
        paddingX: { xs: "20px", md: "100px" },
        paddingY: { xs: "90px", md: "100px" },
        bgcolor: "#E1E3DE",
      }}>
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "50px" },
          fontWeight: 500,
          textAlign: { xs: "center", md: "left" },
        }}>
        Project Gallery
      </Typography>

      <Box
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
