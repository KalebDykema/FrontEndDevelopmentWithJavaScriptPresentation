const form = document.getElementById('newsletterForm')
const dialog = document.querySelector('dialog')
// const dialogCloseBtn = dialog.querySelector('btn')

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
    toggleDialog(true, data)
  }
})

// dialogCloseBtn.addEventListener('click', () => toggleDialog(false))

const toggleDialog = (value, data) => {
  const attribute = 'open'

  // Close the dialog
  if (!value) {
    dialog.removeAttribute(attribute)
    return
  }

  // Open the dialog
  dialog.querySelector('p').innerText = `Thank you ${data.get(
    'name'
  )} for signing up! We'll email you newsletters and updates at ${data.get(
    'email'
  )}.`
  dialog.setAttribute(attribute, value)
}

const toggleError = (section, value) => {
  const getFormElement = (query) => {
    return form.querySelector(`#${section}Section ${query}`)
  }

  getFormElement('input').classList.toggle('error', value)
  getFormElement('p').classList.toggle('invisible', !value)
}
