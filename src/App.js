import { createTheme, ThemeProvider } from "@mui/material/styles"
import Routes from "./Router";

const theme = createTheme({
  palette: {
    primary: {
      main: "#056CF2",
      light: "#96B3D9"
    },
    secondary: {
      main: "#F25D07"
    }
  },
  typography: {
    fontFamily: [
      "Poppins",
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(", ")
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h2: {
          fontWeight: 600,
          fontSize: "28px",
          lineHeight: "42px"
        },
        h3: {
          fontWeight: 600,
          fontSize: "26px",
          lineHeight: "33.8px"
        },
        h4: {
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "23.8px"
        },
        h5: {
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "24px"
        },
        h6: {
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "21px"
        },
        body1: {
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "20px"
        },
        body2: {
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "20px"
        }
      }
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
