import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#0079d3" },
    secondary: { main: "#ff4500" },
    error: { main: "#d93a00" },
    text: { primary: "#1c1c1c", secondary: "#576f76" },
  },
  shape: { borderRadius: 4 },
  typography: {
    fontFamily: '"IBM Plex Sans", system-ui, -apple-system, sans-serif',
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 4, padding: "8px 22px" } },
    },
  },
});
