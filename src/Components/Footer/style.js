import { Box, styled } from "@mui/material"
import { hover } from "@testing-library/user-event/dist/hover"

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "10px",
  background: theme.palette.primary.main,

  "@media screen and (min-width: 850px)": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    "& .p0": {
      order: "2"
    },
    "& .p1": {
      order: "3"
    },
    "& .p2": {
      order: "0"
    },
    "& .p3": {
      order: "1"
    }
  },

  "& .p0": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  "& b": {
    color: theme.palette.primary.light,
    cursor: "pointer",

    "&:hover": {
      color: theme.palette.secondary.main,
      cursor: "pointer",
    }
  },

  "& .textMargin": {
    margin: "20px 0",
  },

  "& .redesSociais": {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "@media screen and (min-width: 850px)": {
      width: "20%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",

      "& a, & p": {
        display: "flex",
        alignItems: "center",
        margin: "10px 0",
      }
    },

    "& a": {
      display: "flex",
      alignItems: "center",
    }
  },

  "& .itemMenu": {
    cursor: "pointer",

    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer"
    }

  },
}))