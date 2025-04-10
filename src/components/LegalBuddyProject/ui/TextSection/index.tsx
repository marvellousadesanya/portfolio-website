import { Box, Typography } from "@mui/material";

export const TextSection = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: { xs: "100%", md: "346px" },
          gap: "20px",
        }}>
        <Typography
          sx={{
            fontSize: { xs: "30px", md: "60px" },
            fontWeight: 500,
            textAlign: { xs: "center", md: "left" },
          }}>
          Legal Buddy
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "20px" },
            fontWeight: 500,
            mt: "20px",
            textAlign: { xs: "center", md: "left" },
          }}>
          Legal Buddy's app allows users to select lawyers for different cases,
          offering a convenient and accessible way to find and connect with
        </Typography>

        <Typography
          sx={{
            textDecoration: "underline",
            fontWeight: 600,
            fontSize: "20px",
            textAlign: { xs: "center", md: "left" },
          }}>
          View Project
        </Typography>
      </Box>
    </>
  );
};
