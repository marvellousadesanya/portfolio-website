import { Box, Stack } from "@mui/material";
import legalBuddyApp from "../../../../assets/legal-buddy-app2.png";
import legalBuddyAppBig from "../../../../assets/legal-buddy-app.png";

export const ImageSection = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",

          alignItems: "center",
          gap: "5vw",
        }}>
        <img src={legalBuddyApp} alt="legalBuddyApp" />
        <img src={legalBuddyAppBig} alt="legalBuddyAppBig" />
      </Stack>
    </Box>
  );
};
