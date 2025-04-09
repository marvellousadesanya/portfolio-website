import { Box, Typography } from "@mui/material";
import { DesignCard } from "./ui/DesignCard";
import { designFocuses } from "./data/designfocuses";

export const DesignFocus = () => {
  return (
    <Box sx={{ padding: "100px", bgcolor: "#0B91D9" }}>
      <Typography sx={{ fontSize: "50px", fontWeight: 500 }}>
        Design Focuses
      </Typography>

      <Box
        sx={{
          mt: "70px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: "20px",
        }}>
        {designFocuses.map((designFocus) => (
          <DesignCard
            key={designFocus.title}
            image={designFocus.image}
            title={designFocus.title}
            description={designFocus.description}
          />
        ))}
      </Box>
    </Box>
  );
};
