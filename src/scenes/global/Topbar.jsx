import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { motion } from "framer-motion";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const topbarVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } }
  };

  return (
    <motion.div
      variants={topbarVariants}
      initial="initial"
      animate="animate"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        p={2}
        sx={{
          backgroundColor: colors.primary,
          color: colors.onPrimary,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", letterSpacing: "1px" }}
        >
          Weather App
        </Typography>

        <Box display="flex">
          <IconButton
            onClick={colorMode.toggleColorMode}
            sx={{
              backgroundColor: "transparent",
              border: "none",
              color: colors.onPrimary,
              cursor: "pointer",
            }}
          >
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Topbar;
