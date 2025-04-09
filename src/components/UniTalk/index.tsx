import { Box, Stack, Typography } from "@mui/material";
import uniTalk1 from "../../assets/uni-talk1.png";
import uniTalk2 from "../../assets/uni-talk2.png";
import uniTalk3 from "../../assets/uni-talk3.png";

export const UniTalk = () => {
  return (
    <Box sx={{ padding: "100px", bgcolor: "white" }}>
      <Stack
        direction="row"
        spacing={2}
        sx={{ justifyContent: "space-between" }}>
        <Box sx={{ color: "black" }}>
          <Typography sx={{ fontSize: "60px", fontWeight: 500 }}>
            Uni Talk
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 500,
              maxWidth: "500px",
              mt: "20px",
            }}>
            Uni Talk is a social platform for university students to connect,
            discuss, and share experiences with peers from their own
            institution, fostering a sense of community and collaboration.
          </Typography>
          <Typography
            sx={{
              mt: "20px",

              fontWeight: 500,
              textDecoration: "underline",
              fontSize: "20px",
            }}>
            View Project
          </Typography>
        </Box>

        <Box
          sx={{
            position: "relative",
            height: "auto",
            display: "flex",

            gap: "20px",
          }}>
          <Box sx={{ position: "relative" }}>
            <img src={uniTalk1} alt="uniTalk" style={{}} />
          </Box>
          <Box sx={{ position: "relative", marginTop: "130px" }}>
            <img src={uniTalk2} alt="uniTalk" style={{}} />
          </Box>
          <Box sx={{ position: "relative", marginTop: "20px" }}>
            <img src={uniTalk3} alt="uniTalk" style={{}} />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
