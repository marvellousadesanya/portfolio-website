import { Box, Link, Typography } from "@mui/material";
import arrow from "../assets/arrow.svg";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import linkedInLogo from "../assets/linkedin.svg";
import xLogo from "../assets/x.svg";
import instagramLogo from "../assets/instagram.svg";
import behanceLogo from "../assets/behance.svg";

export const Footer = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const socialsRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const lineRef = useRef(null);
  const backToTopRef = useRef(null);

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      // Create a timeline for the animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Title animation
      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // Contact info animations - staggered
      tl.from(
        [socialsRef.current, emailRef.current, phoneRef.current],
        {
          y: 30,
          opacity: 0,
          stagger: 0.2,
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.3"
      );

      // Line animation
      tl.from(
        lineRef.current,
        {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1,
          ease: "power1.out",
        },
        "-=0.4"
      );

      // Back to top button animation
      tl.from(
        backToTopRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      );

      // Add a continuous subtle animation to the back to top button
      gsap.to(backToTopRef.current, {
        y: "-10px",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef }
  );

  // Function to scroll to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      ref={containerRef}
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
              ref={titleRef}
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
              <Box ref={socialsRef}>
                <Box>
                  <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                    Socials
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "10px", mt: "20px" }}>
                  <Link href="http://linkedin.com/in/esther-ovenseri-ba7406288">
                    <img src={linkedInLogo} alt="LinkedIn" />
                  </Link>

                  <Link href="https://x.com/itohan_ovens">
                    <img src={xLogo} alt="X" />
                  </Link>

                  <Link href="https://www.instagram.com/esther_itohan/">
                    <img src={instagramLogo} alt="Instagram" />
                  </Link>

                  <Link href="https://www.behance.net/estherovenseri">
                    <img src={behanceLogo} alt="Behance" />
                  </Link>
                </Box>
              </Box>

              <Box ref={emailRef}>
                <Typography sx={{ fontWeight: 600 }}>Email</Typography>
                <Typography sx={{ textDecoration: "underline" }}>
                  <Link
                    color="#FFFFFF"
                    href="mailto:estherovenseri547@gmail.com">
                    estherovenseri547@gmail.com
                  </Link>
                </Typography>
              </Box>

              <Box ref={phoneRef}>
                <Typography sx={{ fontWeight: 600 }}>Phone</Typography>
                <Typography sx={{ textDecoration: "underline" }}>
                  <Link color="#FFFFFF" href="tel:+2349038303916">
                    +234 903 830 3916
                  </Link>
                </Typography>
              </Box>
            </Box>
            <Box
              ref={lineRef}
              width="100%"
              height="4px"
              bgcolor="white"
              display={{ xs: "none", md: "block" }}
            />
          </Box>

          <Box
            ref={backToTopRef}
            onClick={scrollToTop}
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
