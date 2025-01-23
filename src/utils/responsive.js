import { useMediaQuery } from "@mui/material";

const breakpoints = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const devices = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  "2xl": `(min-width: ${breakpoints["2xl"]})`,
};

export const useMuiResponsiveness = () => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.md})`);
  const isTablet = useMediaQuery(`(max-width: ${breakpoints.lg})`);
  const isLaptop = useMediaQuery(`(min-width: ${breakpoints.lg})`);
  return {
    isMobile,
    isTablet,
    isLaptop,
  };
};
