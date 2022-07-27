import { Box, styled } from "@mui/material"
import { hover } from "@testing-library/user-event/dist/hover"

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  background: theme.palette.primary.main,

  "@media screen and (min-width: 850px)": {
    display: "flex",
    justifyContent: "space-between",
    padding: '0 10px'
  },

  "& span svg": {
    color: "white",
    width: "40px",
    height: "40px"
  },

  "& .iconMenu": {
    display: "block",

    "@media screen and (min-width: 850px)": {
      display: "none",
    },

  },

  "& .navbar": {
    display: "none",

    "@media screen and (min-width: 850px)": {
      display: "flex",
      width: " 30vw",
      justifyContent: "space-between",

      "& .itemMenu": {
        cursor: "pointer",

        "&:hover": {
          textDecoration: "underline",
          cursor: "pointer"
        }

      },

      "& input[type='text']": {
        width: " 90%",
        padding: "10px",
        borderRadius: "20px",
        border: 'solid 1px #ccc',

        "&:focus": {
          boxShadow: "0 0 0 0",
          border: "0 none",
          outline: "0",
        }
      }
    },
  }

}))

export const MenuContainer = styled(Box)(({ theme }) => ({
  width: "150px",
  background: "white",
  position: "absolute",
  top: '10vh',
  right: '15px',
  boxShadow: "-1px 2px 5px 0px rgba(0,0,0,0.75)",
  padding: "10px 0",

  "@media screen and (min-width: 850px)": {
    display: "none",
  },

  "& .itemMenu": {
    width: "100%",
    textAlign: "center",
    padding: "10px",
    cursor: "pointer",

    "&:hover": {
      width: "100%",
      textAlign: "center",
      padding: "10px",
      background: "#ccc",
      cursor: "pointer"
    }
  },

}))