import { Box, styled } from "@mui/material"

export const HeaderContainer = styled(Box)(({ _theme }) => ({
  width: "100%",
  height: "10vh",
}))

export const Content = styled(Box)(({ _theme }) => ({
  width: "100%",
  minHeight: "80vh",
}))

export const FooterContainer = styled(Box)(({ _theme }) => ({
  width: "100%",
  height: "auto",
}))
