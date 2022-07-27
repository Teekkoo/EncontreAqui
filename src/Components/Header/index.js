import React from 'react'
import { Container, MenuContainer } from './style'
import { header, menu } from './data'
import { Box, IconButton, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const [active, setActive] = React.useState(false)
  const [opc, setOpc] = React.useState(false)

  React.useEffect(() => {
    const token = localStorage.getItem("encontre@token")
    if (token === null) {
      setOpc(true)
    } else {
      setOpc(false)
    }
  }, [])

  console.log(active)

  const Menu = () => {
    return (
      <MenuContainer>
        {
          menu.map((item, index) => {
            return (
              <Typography key={index}
                variant='body1'
                className='itemMenu'
                onClick={() => { navigate(item.link) }} >
                {item.item}
              </Typography>
            )
          })
        }
      </MenuContainer>
    )
  }

  return (
    <Container >
      <span onClick={() => { navigate(-1) }}>{header.icon1}</span>
      <Typography variant='h3' color="white" >{header.title}</Typography>
      <Box className="navbar">
        <input type="text" id="gsearch" name="gsearch" />
        <IconButton aria-label="fingerprint" sx={{ color: 'white' }}>
          {header.icon3}
        </IconButton>
      </Box>
      <Box className="navbar">
        {
          menu.map((item, index) => {
            return (
              <Typography key={index}
                variant='body1'
                className='itemMenu'
                color="white"
                onClick={() => { navigate(item.link) }} >
                {item.item}
              </Typography>
            )
          })
        }
      </Box>
      {opc ?
        (<span className='iconMenu' onClick={() => setActive(!active)}>{header.icon2}</span>)
        :
        (<Typography variant='body1' color="white" onClick={() => { navigate(header.login.link) }} >{header.login.item}</Typography>)}
      {active && <Menu />}
    </Container>
  )
}

export default Header
