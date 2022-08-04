export function submitMsg(data, msg) {
  if (data?.response?.status === 404) {
    const errorMsg = data?.response?.data?.detail[0]?.msg
    return { open: true, status: 'error', msg: errorMsg || msg }
  }
  return { open: false, status: 'error', msg: '' }
}

export function validaCampos(data) {
  let result = Object.entries(data);
  let count = 0;
  result.forEach((item) => {
    if (item[1] === "") {
      count = count + 1;
    }
  });
  if (count > 0) {
    return { open: true, status: 'error', msg: 'Preencha os Campos Corretamente' }
  } else {
    return null
  }
}