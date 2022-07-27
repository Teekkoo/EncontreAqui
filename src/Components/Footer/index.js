import React from 'react'
import { Container } from './style'
import { footer, redes, menu } from "./data"
import { Box, Link, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Box className='p0' >
        <Typography variant='h3' color="white" >{footer.title}</Typography>
        <Typography variant='h5' color="white" >Desenvolvido por <b>{footer.name}</b></Typography>
      </Box>
      <Box className='redesSociais p1' >
        {redes.map((item, index) => {
          return (
            <Link key={index} href="#" underline="hover" color="white">
              {item.icon} {item.name}
            </Link>
          )
        })}
      </Box>
      <Typography variant='h6' color="white" className='textMargin p2' >{footer.copy}</Typography>
      <Box className='redesSociais p3' >
        {menu.map((item, index) => {
          return (
            <Typography key={index}
              variant='body1'
              className='itemMenu'
              color="white"
              onClick={() => { navigate(item.link) }} >
              {item.item}
            </Typography>
          )
        })}
      </Box>
    </Container>
  )
}

export default Footer
