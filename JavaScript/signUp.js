// DOM Elements
const form = document.getElementById('newsletterForm')
const dialog = document.getElementById('dialog-container')
const dialogCloseBtn = dialog.querySelector('button')

// Set up event handlers
const submitForm = (e) => {
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
}

const closeDialog = (e) => {
  // If we don't have a key defined, then this was called by clicking on the X button. Otherwise, it was called on a keydown handler, and we need to make sure it's the escape key
  if (!e.key || e.key === 'Escape') {
    toggleDialog(false)
  }
}

// Functions used by handlers
const toggleDialog = (value, data) => {
  // Toggle
  dialog.classList.toggle('invisible', !value)
  if (value) {
    // Open the dialog
    dialog.querySelector('p').innerText = `Thank you ${data.get(
      'name'
    )} for signing up! We'll email you newsletters and updates at ${data.get(
      'email'
    )}.`
  }
}

const toggleError = (section, value) => {
  const getFormElement = (query) => {
    return form.querySelector(`#${section}Section ${query}`)
  }

  getFormElement('input').classList.toggle('error', value)
  getFormElement('p').classList.toggle('invisible', !value)
}

// Set up event listeners
form.addEventListener('submit', submitForm)
dialogCloseBtn.addEventListener('click', closeDialog)
document.addEventListener('keydown', closeDialog)
