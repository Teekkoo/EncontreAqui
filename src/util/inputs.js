// falta a prevenção de campo vazio (verificar se o campo pode ir vazio ou é obrigatorio)
export function mascaraInpt(input, type) {
  const text = removeFistSpace(input.target.value)
  switch (type) {
    case 'cep':
      return validaCEP(text)
    case 'cpf':
      return validaCPF(text)
    case 'tel':
      return validaTel(text)
    case 'cel':
      return validaCel(text)
    case 'cnpj':
      return validaCNPJ(text)
    case 'email':
      return validaEmail(text)
    case 'login':
      return validaLogin(text)
    case 'real':
      return validaReal(text)
    default:
      return validaString(text)
  }
}

export function removeString(text) {
  // retorna apenas numeros
  return text.filter(n => (Number(n) || n === '0'))
}

function removeFistSpace(text) {
  const array = text.split('')
  let string = 0
  const newText = array.filter(element => {
    if (element !== ' ') {
      string++
    }
    if (element === ' ' && string === 0) {
      return null
    }
    return element
  })
  return newText
}

function validaCEP(text) {
  const cep = removeString(text)
  if (cep.length === 8) {
    let newCep = addPontos(cep, 'cep')
    return [newCep, { msg: ' ', error: false }, cep.join('')]
  } else {
    if (cep.length < 8) {
      return [text.join(''), { msg: `CEP Incorreto! Faltam ${8 - cep.length} caracteres`, error: true }, '']
    } else {
      return [text.join(''), { msg: 'CEP Incorreto! São apenas 8 digitos', error: true }, '']
    }
  }
}

function validaCPF(text) {
  const cpf = removeString(text)
  if (cpf.length === 11) {
    let newCpf = addPontos(cpf, 'cpf')
    return [newCpf, { msg: ' ', error: false }, cpf.join('')]
  } else {
    if (cpf.length < 11) {
      return [text.join(''), { msg: `CPF Incorreto! Faltam ${11 - cpf.length} caracteres`, error: true }, '']
    } else {
      return [text.join(''), { msg: 'CPF Incorreto! São apenas 11 digitos', error: true }, '']
    }
  }
}

function validaTel(text) {
  const tel = removeString(text)
  if (tel.length === 12) {
    let newTel = addPontos(tel, 'tel')
    return [newTel, { msg: ' ', error: false }, tel.join('')]
  } else {
    if (tel.length < 12) {
      return [text.join(''), { msg: `Telefone Incorreto! Faltam ${12 - tel.length} caracteres`, error: true }, '']
    } else {
      return [text.join(''), { msg: 'Telefone Incorreto! São apenas 12 caracteres', error: true }, '']
    }
  }
}

function validaCel(text) {
  const cel = removeString(text)
  if (cel.length === 13) {
    let newCel = addPontos(cel, 'celular')
    return [newCel, { msg: ' ', error: false }, cel.join('')]
  } else {
    if (cel.length < 13) {
      return [text.join(''), { msg: `Celular Incorreto! Faltam ${13 - cel.length} caracteres`, error: true }, '']
    } else {
      return [text.join(''), { msg: 'Celular Incorreto! São apenas 13 caracteres', error: true }, '']
    }
  }
}

function validaCNPJ(text) {
  const cnpj = removeString(text)
  if (cnpj.length === 14) {
    let newCnpj = addPontos(cnpj, 'cnpj')
    return [newCnpj, { msg: ' ', error: false }, cnpj.join('')]
  } else {
    if (cnpj.length < 14) {
      return [text.join(''), { msg: `CNPJ Incorreto! Faltam ${14 - cnpj.length} caracteres`, error: true }, '']
    } else {
      return [text.join(''), { msg: 'CNPJ Incorreto! São apenas 14 digitos', error: true }, '']
    }
  }
}

function validaEmail(text) {
  let isArr = 0
  let isPont = 0
  text.forEach(e => {
    if (e === '@') { isArr = isArr + 1 }
    if (e === '.') { isPont = isPont + 1 }
  })
  if (isArr === 1 && isPont > 0) {
    return [text.join(''), { msg: ' ', error: false }, text.join('')]
  } else {
    return [text.join(''), { msg: 'Email Invalido! deve conter "@" e "."', error: true }, '']
  }
}

function validaString(text) {
  if (text.length > 0) {
    return [text.join(''), { msg: ' ', error: false }, text.join('')]
  } else {
    return [text.join(''), { msg: 'O Campo deve ser Preenchido', error: true }, '']
  }
}

function validaLogin(text) {
  const data = removeString(text)
  if (data.length < 7) {
    const isArr = text.indexOf('@')
    if (isArr !== -1) {
      return validaEmail(text)
    } else {
      return validaString(text)
    }
  }
  if (data.length > 6 && data.length < 10) {
    return validaCEP(text)
  }
  if (data.length > 9 && data.length < 12) {
    return validaCPF(text)
  }
  if (data.length > 11 && data.length < 13) {
    return validaTel(text)
  }
  if (data.length > 12 && data.length < 14) {
    return validaCel(text)
  }
  if (data.length > 13 && data.length < 18) {
    return validaCNPJ(text)
  }
}

function validaReal(text) {
  let real = removeString(text)
  let count = 0
  real = real.filter((e) => {
    if (e !== '0' && e !== 0) {
      count++
    }
    if (count === 0 && (e === '0' || e === 0)) {
      return null
    }
    return e
  })
  real.reverse()
  if (real.length < 3) {
    let value = real.length
    while (value < 3) {
      real.push(0)
      value++
    }
  }
  let ponto = [...real]
  ponto.splice(0, 2)
  ponto = ponto.length / 3
  return [addPontos(real, 'real', ponto), { msg: ' ', error: false }, addPontos(real, 'real', ponto)]
}

function addPontos(value, type, havePonto) {
  let text = [...value]
  if (type === 'cep') {
    text.splice(2, 0, '.')
    text.splice(6, 0, '-')
    return text.join('')
  }
  if (type === 'cpf') {
    text.splice(3, 0, '.')
    text.splice(7, 0, '.')
    text.splice(11, 0, '-')
    return text.join('')
  }
  if (type === 'tel') {
    text.splice(0, 0, '+')
    text.splice(3, 0, ' ')
    text.splice(4, 0, '(')
    text.splice(7, 0, ')')
    text.splice(8, 0, ' ')
    text.splice(13, 0, '-')
    return text.join('')
  }
  if (type === 'celular') {
    text.splice(0, 0, '+')
    text.splice(3, 0, ' ')
    text.splice(4, 0, '(')
    text.splice(7, 0, ')')
    text.splice(8, 0, ' ')
    text.splice(10, 0, ' ')
    text.splice(15, 0, '-')
    return text.join('')
  }
  if (type === 'cnpj') {
    text.splice(2, 0, '.')
    text.splice(6, 0, '.')
    text.splice(10, 0, '/')
    text.splice(15, 0, '-')
    return text.join('')
  }
  if (type === 'real') {
    text.splice(2, 0, ',')
    let count = 0
    let position = 3
    if (havePonto > 1) {
      while (count < parseInt(havePonto)) {
        position = position + 3
        if (position < text.length) {
          text.splice(position, 0, '.')
          position++
        }
        count++
      }
    }
    return text.reverse().join('')
  }
}
