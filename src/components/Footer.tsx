import { Box, Link, Typography } from "@mui/material";
import arrow from "../assets/arrow.svg";

export const Footer = () => {
  return (
    <Box
      sx={{
        position: "relative",
        color: "white",
        background: "linear-gradient(to right, #251486, #0B91D9)",
        paddingX: { xs: "20px", md: "100px" },
        paddingY: { xs: "80px", md: "100px" },
        minHeight: "769px",
        display: "flex",
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "center",
      }}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ width: "85%" }}>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "30px", md: "60px" },
                fontWeight: 400,
              }}>
              Contact Me
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: "50px", md: 0 },
                mt: "100px",
                fontSize: "20px",
              }}>
              <Box>
                <Box>
                  <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                    Socials
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <Typography>LinkedIn</Typography>
                  <Typography>X</Typography>
                  <Typography>Instagram</Typography>
                  <Typography>Behance</Typography>
                </Box>
              </Box>

              <Box>
                <Typography sx={{ fontWeight: 600 }}>Email</Typography>
                <Typography sx={{ textDecoration: "underline" }}>
                  <Link
                    color="#FFFFFF"
                    href="mailto:estherovenseri547@gmail.com">
                    estherovenseri547@gmail.com
                  </Link>
                </Typography>
              </Box>

              <Box>
                <Typography sx={{ fontWeight: 600 }}>Phone</Typography>
                <Typography sx={{ textDecoration: "underline" }}>
                  <Link color="#FFFFFF" href="tel:+2349038303916">
                    +234 903 830 3916
                  </Link>
                </Typography>
              </Box>
            </Box>
            <Box
              width="100%"
              height="4px"
              bgcolor="white"
              display={{ xs: "none", md: "block" }}
            />
          </Box>

          <Box
            sx={{
              position: "absolute",
              right: { xs: "50%", md: "50px" },
              bottom: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
              flexDirection: "column",
              transform: { xs: "translateX(50%)", md: "none" },
            }}>
            <img
              src={arrow}
              alt="arrow"
              style={{ width: "40px", height: "40px" }}
            />
            <Typography>Back to top</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
