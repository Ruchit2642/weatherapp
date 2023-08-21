import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  const headerStyles = {
    marginBottom: "30px",
    textAlign: "center",
  };

  const titleStyles = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: colors.grey[100],
    marginBottom: "5px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  };

  const subtitleStyles = {
    fontSize: "1.2rem",
    color: colors.greenAccent[400],
    letterSpacing: "1px",
  };

  return (
    <Box style={headerStyles}>
      <Typography variant="h2" sx={titleStyles}>
        {title}
      </Typography>
      <Typography variant="h5" sx={subtitleStyles}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;