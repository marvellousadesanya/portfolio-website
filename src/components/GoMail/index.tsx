import { Box, Stack, Typography } from "@mui/material";
import goMail from "../../assets/gomail.png";

export const GoMail = () => {
  return (
    <Box
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
            sx={{
              fontSize: { xs: "30px", md: "60px" },
              fontWeight: 500,
              textAlign: { xs: "center", md: "left" },
            }}>
            GoMail
          </Typography>
          <Typography
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
            sx={{
              mt: "20px",
              color: "white",
              fontWeight: 500,
              textDecoration: "underline",
              fontSize: "20px",
              textAlign: { xs: "center", md: "left" },
            }}>
            View Project
          </Typography>
        </Box>

        <Box sx={{ paddingTop: { xs: "60px", md: 0 } }}>
          <img
            src={goMail}
            alt="goMail"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Stack>
    </Box>
  );
};
