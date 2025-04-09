import { Box } from "@mui/material";
import { ImageSection, TextSection } from "./ui";
// import legalBuddyApp from "../../assets/legal-buddy-app2.png";
// import legalBuddyAppBig from "../../assets/legal-buddy-app.png";

export const LegalBuddyProject = () => {
  return (
    <Box>
      <Box
        sx={{
          paddingX: "100px",
          paddingTop: "100px",
          gap: "20px",
          bgcolor: "#0A99A1",
          display: "flex",
          justifyContent: "center",
        }}>
        <Box
          sx={{
            paddingX: "100px",

            width: "100%",
            display: "flex",

            justifyContent: "space-between",
            alignItems: "center",
            gap: "80px",
          }}>
          <TextSection />
          <ImageSection />
          {/* <img src={legalBuddyApp} alt="legalBuddyApp" />
          <img src={legalBuddyAppBig} alt="legalBuddyAppBig" /> */}
        </Box>
      </Box>
    </Box>
  );
};
