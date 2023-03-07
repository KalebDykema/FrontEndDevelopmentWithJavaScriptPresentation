const form = document.getElementById('newsletterForm')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const data = new FormData(form)
  const name = data.get('name')
  const email = data.get('email')

  if (!name || !email) {
    displayError()
    return
  }
})

const displayError = () => {
  console.log('show error')
}
