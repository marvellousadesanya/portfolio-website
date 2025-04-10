import { Box, Stack, Typography } from "@mui/material";
import profile from "../assets/profile-picture.png";
import star from "../assets/star.svg";

export const Profile = () => {
  return (
    <>
      <Box
        sx={{
          padding: { xs: "20px", md: "100px" },
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          gap="50px"
          sx={{
            width: "100%",
          }}>
          <Box sx={{ width: "100%" }}>
            <img src={profile} alt="Profile" style={{ width: "100%" }} />
          </Box>
          <Typography
            sx={{
              maxWidth: "696px",
              fontSize: { xs: "20px", md: "40px" },
              textAlign: { xs: "center", md: "left" },
            }}
            className="poppins-medium"
            style={{ fontFamily: '"Poppins", sans-serif' }}>
            Hey, I'm Itohan! I'm a UI/UX designer with a knack for detail and a
            love for designing products that are both functional and fun. I
            believe that good design can make a real difference in people's
            lives, and I'm excited to share my work with you.
          </Typography>
        </Stack>

        <img
          src={star}
          alt="star"
          style={{
            position: "absolute",
            bottom: 0,
            right: "-3%",
          }}
        />
      </Box>
    </>
  );
};
