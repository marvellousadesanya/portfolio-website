import { Box, Typography } from "@mui/material";
import { GalleryGrid } from "./ui/GalleryGrid";

export const ProjectGallery = () => {
  return (
    <Box sx={{ padding: { xs: "20px", md: "100px" }, bgcolor: "#E1E3DE" }}>
      <Typography sx={{ fontSize: "50px", fontWeight: 500 }}>
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
