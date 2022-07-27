import React from 'react'
import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { HeaderContainer, Content, FooterContainer } from './style'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'


const AppLayout = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Content>
        <Outlet />
      </Content>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Grid>
  )
}

export default AppLayout
