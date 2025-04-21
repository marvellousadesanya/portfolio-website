import { Box, Typography } from "@mui/material";
import { DesignCard } from "./ui/DesignCard";
import { designFocuses } from "./data/designfocuses";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const DesignFocus = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(cardsRef.current, {
        y: 100,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: containerRef }
  );

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <Box
      ref={containerRef}
      sx={{ padding: { xs: "20px", md: "100px" }, bgcolor: "#0B91D9" }}>
      <Typography
        ref={titleRef}
        sx={{
          fontSize: { xs: "30px", md: "50px" },
          fontWeight: 500,
          width: { xs: "100%", md: "fit-content" },
          textAlign: { xs: "center", md: "left" },
        }}>
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
          <div ref={addToRefs} key={designFocus.title}>
            <DesignCard
              image={designFocus.image}
              title={designFocus.title}
              description={designFocus.description}
            />
          </div>
        ))}
      </Box>
    </Box>
  );
};
