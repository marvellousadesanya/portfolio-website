import { Box, Stack, Typography } from "@mui/material";
import profile from "../assets/profile-picture.png";
export const Profile = () => {
  return (
    <>
      <Box sx={{ padding: "100px", display: "flex", justifyContent: "center" }}>
        <Stack direction={"row"} gap="50px">
          <Box>
            <img src={profile} alt="Profile" />
          </Box>
          <Typography
            sx={{ maxWidth: "696px", fontSize: "40px" }}
            className="poppins-medium"
            style={{ fontFamily: '"Poppins", sans-serif' }}>
            Hey, I'm Itohan! I'm a UI/UX designer with a knack for detail and a
            love for designing products that are both functional and fun. I
            believe that good design can make a real difference in people's
            lives, and I'm excited to share my work with you.
          </Typography>
        </Stack>
      </Box>
    </>
  );
};
