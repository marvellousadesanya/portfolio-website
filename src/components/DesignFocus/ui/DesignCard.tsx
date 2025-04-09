import { Box, Typography } from "@mui/material";

interface DesignCardProps {
  image: string;
  title: string;
  description: string;
}

export const DesignCard = ({ image, title, description }: DesignCardProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <img src={image} alt="Design" />

      <Box sx={{ mt: "80px", maxWidth: "336px", textAlign: "center" }}>
        <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: "16px", mt: "30px" }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};
