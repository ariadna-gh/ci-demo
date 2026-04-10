import js from '@eslint/js'
import globals from 'globals' // Переконайтеся, що цей рядок є!
export default [
  {
    // Важливо: вкажіть мовні налаштування окремо або для всіх файлів
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node // додайте це, якщо плануєте використовувати console або process
      }
    }
  },
  js.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'no-console': 'warn',
      'eqeqeq': 'error',
    }
  }
]
