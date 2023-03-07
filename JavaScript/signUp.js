const form = document.getElementById('newsletterForm')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const data = new FormData(form)
  const entries = [...data.entries()]

  // This checks if we're missing any values and displays errors for each
  let valid = true
  entries.forEach((entry) => {
    if (!entry[1]) {
      valid = false
      displayError(entry[0])
    }
  })

  if (valid) {
    console.log('submit')
  }
})

const displayError = (section) => {
  const getFormElement = (query) => {
    return form.querySelector(`#${section}Section ${query}`)
  }

  getFormElement('input').classList.add('error')
  getFormElement('p').classList.remove('invisible')
}
