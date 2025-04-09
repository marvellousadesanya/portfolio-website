import { Box, Typography } from "@mui/material";

export const TextSection = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "346px",
          gap: "20px",
        }}>
        <Typography sx={{ fontSize: "60px", fontWeight: 500 }}>
          Legal Buddy
        </Typography>
        <Typography sx={{ fontSize: "20px", fontWeight: 500, mt: "20px" }}>
          Legal Buddy's app allows users to select lawyers for different cases,
          offering a convenient and accessible way to find and connect with
        </Typography>

        <Typography
          sx={{
            textDecoration: "underline",
            fontWeight: 600,
            fontSize: "20px",
          }}>
          View Project
        </Typography>
      </Box>
    </>
  );
};
