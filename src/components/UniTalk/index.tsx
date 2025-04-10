import { Box, Stack, Typography } from "@mui/material";
import uniTalk1 from "../../assets/uni-talk1.png";
import uniTalk2 from "../../assets/uni-talk2.png";
import uniTalk3 from "../../assets/uni-talk3.png";

export const UniTalk = () => {
  return (
    <Box
      sx={{
        paddingX: { xs: "20px", md: "100px" },
        paddingY: { xs: "90px", md: "100px" },
        bgcolor: "white",
      }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        sx={{ justifyContent: "space-between" }}>
        <Box sx={{ color: "black", marginBottom: { xs: "40px", md: 0 } }}>
          <Typography
            sx={{
              fontSize: { xs: "30px", md: "60px" },
              fontWeight: 500,
              textAlign: { xs: "center", md: "left" },
            }}>
            Uni Talk
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "20px" },
              fontWeight: 500,
              maxWidth: "500px",
              mt: "20px",
              textAlign: { xs: "center", md: "left" },
            }}>
            Uni Talk is a social platform for university students to connect,
            discuss, and share experiences with peers from their own
            institution, fostering a sense of community and collaboration.
          </Typography>
          <Typography
            sx={{
              mt: "20px",
              textAlign: { xs: "center", md: "left" },
              fontWeight: 500,
              textDecoration: "underline",
              fontSize: { xs: "16px", md: "20px" },
            }}>
            View Project
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "flex-end" },
            gap: "20px",
          }}>
          <Box
            sx={{
              flex: { xs: "0 1 calc(50% - 10px)", md: "0 0 auto" },
              maxWidth: { xs: "calc(50% - 10px)", md: "auto" },
            }}>
            <img
              src={uniTalk1}
              alt="uniTalk"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "100%",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: { xs: "0 1 calc(50% - 10px)", md: "0 0 auto" },
              maxWidth: { xs: "calc(50% - 10px)", md: "auto" },
              marginTop: { xs: 0, md: "130px" },
            }}>
            <img
              src={uniTalk2}
              alt="uniTalk"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "100%",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: { xs: "0 1 100%", md: "0 0 auto" },
              maxWidth: { xs: "70%", md: "auto" },
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}>
            <img
              src={uniTalk3}
              alt="uniTalk"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "100%",
              }}
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
