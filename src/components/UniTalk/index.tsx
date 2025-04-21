import { Box, Stack, Typography } from "@mui/material";
import uniTalk1 from "../../assets/uni-talk1.png";
import uniTalk2 from "../../assets/uni-talk2.png";
import uniTalk3 from "../../assets/uni-talk3.png";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const UniTalk = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const linkRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      // Create a timeline for the animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // Text animations
      tl.from(titleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      });

      tl.from(
        descriptionRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.4"
      );

      tl.from(
        linkRef.current,
        {
          y: 10,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      );

      // Image animations - staggered floating effect
      tl.from(
        [image1Ref.current, image2Ref.current, image3Ref.current],
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      );

      // Add subtle floating animation that continues to run
      gsap.to(image1Ref.current, {
        y: "-10px",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(image2Ref.current, {
        y: "-15px",
        duration: 2.5,
        delay: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(image3Ref.current, {
        y: "-12px",
        duration: 2.2,
        delay: 0.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef }
  );

  return (
    <Box
      ref={containerRef}
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
            ref={titleRef}
            sx={{
              fontSize: { xs: "30px", md: "60px" },
              fontWeight: 500,
              textAlign: { xs: "center", md: "left" },
            }}>
            Uni Talk
          </Typography>
          <Typography
            ref={descriptionRef}
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
            ref={linkRef}
            sx={{
              mt: "20px",
              textAlign: { xs: "center", md: "left" },
              fontWeight: 500,
              textDecoration: "underline",
              fontSize: { xs: "16px", md: "20px" },
              cursor: "pointer",
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
              ref={image1Ref}
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
              ref={image2Ref}
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
              ref={image3Ref}
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
