import endPoints from '.'

const sendMail = async (body) => {
  console.log(body)
  const config = {
    method: 'POST',
    body
  }

  fetch(`${endPoints.mail.send}`, config)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err))
}

export { sendMail }
