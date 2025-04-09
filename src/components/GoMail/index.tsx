import { Box, Stack, Typography } from "@mui/material";
import goMail from "../../assets/gomail.png";

export const GoMail = () => {
  return (
    <Box
      sx={{
        bgcolor: "#291770",
        padding: "100px",
        display: "flex",
        justifyContent: "center",
      }}>
      <Stack
        direction="row"
        spacing={2}
        sx={{ width: "100%", justifyContent: "space-between" }}>
        <Box sx={{ color: "white" }}>
          <Typography sx={{ fontSize: "60px", fontWeight: 500 }}>
            GoMail
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 500,
              maxWidth: "500px",
              mt: "20px",
            }}>
            An e-commerce app allowing users to search for products in their
            preferred stores, compare prices, and discover alternatives in other
            stores if items are not found.An e-commerce app allowing users to
            search for products in their preferred stores, compare prices, and
            discover alternatives in other stores if items are not found.
          </Typography>
          <Typography
            sx={{
              mt: "20px",
              color: "white",
              fontWeight: 500,
              textDecoration: "underline",
              fontSize: "20px",
            }}>
            View Project
          </Typography>
        </Box>
        <img src={goMail} alt="goMail" />
      </Stack>
    </Box>
  );
};
