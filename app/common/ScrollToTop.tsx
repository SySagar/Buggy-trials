import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    //cleanup
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <Box
          position={"fixed"}
          right={50}
          bottom={50}
          zIndex={1}
          sx={{
            borderRadius: "100%",
            padding: "4px",
            background: "black",
            width: "fit-content",
            height: "33px",
          }}
        >
          <div onClick={scrollToTop}>
            <ArrowUpwardIcon color="secondary" />
          </div>
        </Box>
      )}
    </div>
  );
}
