const statusBox = document.getElementById('status')
const checkBtn = document.getElementById('check-btn')

// помилка 1
const unusedVariable = 'я ніде не використовуюсь'

// помилка 2
function getStatus() {
  const now = new Date()
  const timeString = now.toLocaleTimeString('uk-UA')

  if (timeString == null) { // ❌ має бути ===
    return
  }

  statusBox.textContent = `✅ Все працює. Перевірено о ${timeString}`
}

checkBtn.addEventListener('click', getStatus)
getStatus()