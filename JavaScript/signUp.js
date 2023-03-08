const form = document.getElementById('newsletterForm')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const data = new FormData(form)
  const entries = [...data.entries()]

  let valid = true
  entries.forEach((entry) => {
    // Reset errors
    toggleError(entry[0], false)

    // If we're missing any values, display the error and mark the form as invalid
    if (!entry[1]) {
      valid = false
      toggleError(entry[0], true)
    }
  })

  if (valid) {
    console.log('submit')
  }
})

const toggleError = (section, value) => {
  const getFormElement = (query) => {
    return form.querySelector(`#${section}Section ${query}`)
  }

  getFormElement('input').classList.toggle('error', value)
  getFormElement('p').classList.toggle('invisible', !value)
}
