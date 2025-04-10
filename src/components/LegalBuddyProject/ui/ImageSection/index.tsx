import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import legalBuddyApp from "../../../../assets/legal-buddy-app2.png";
import legalBuddyAppBig from "../../../../assets/legal-buddy-app-transparent.png";

export const ImageSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Stack
        direction="row"
        spacing={isMobile ? 1 : 2}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: isMobile ? "10px" : "5vw",
        }}>
        <img
          src={legalBuddyApp}
          alt="legalBuddyApp"
          style={{
            maxWidth: isMobile ? "45%" : "auto",
            height: "auto",
            marginBottom: isMobile ? "80px" : 0,
          }}
        />
        <img
          src={legalBuddyAppBig}
          alt="legalBuddyAppBig"
          style={{
            maxWidth: isMobile ? "45%" : "auto",
            height: "auto",
          }}
        />
      </Stack>
    </Box>
  );
};
