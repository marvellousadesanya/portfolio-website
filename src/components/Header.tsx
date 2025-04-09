import { Box, Typography } from "@mui/material";

export const Header = () => {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(to top, #FFFFFF, #98C4EC)",
        }}>
        <Box>
          <Typography
            sx={{
              fontWeight: 700,
              color: "black",
              fontSize: "30px",
            }}>
            Ovenseri Esther Itohan
          </Typography>
          <Typography
            variant="h1"
            sx={{ fontWeight: 500, fontSize: "100px" }}
            color="black">
            UI/UX Design Portfolio
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Box
              bgcolor="black"
              width="100px"
              height="10px"
              borderRadius="10px"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
