import { KeyboardBackspace, Menu, Search } from "@mui/icons-material"


export const header = {
  title: 'My Title App',
  icon1: <KeyboardBackspace />,
  icon2: <Menu />,
  icon3: <Search />,
  login: {
    item: "Login",
    link: "/login"
  }
}

export const menu = [
  {
    item: "Inicio",
    link: "/"
  },
  {
    item: "Perfil",
    link: "/perfil"
  },
  {
    item: "Ajuda",
    link: "/faq"
  },
  {
    item: "Sair",
    link: "/login"
  },
]
