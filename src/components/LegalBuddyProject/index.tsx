import { Box } from "@mui/material";
import { ImageSection, TextSection } from "./ui";
// import legalBuddyApp from "../../assets/legal-buddy-app2.png";
// import legalBuddyAppBig from "../../assets/legal-buddy-app.png";

export const LegalBuddyProject = () => {
  return (
    <Box>
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
          <TextSection />
          <ImageSection />
        </Box>
      </Box>
    </Box>
  );
};
