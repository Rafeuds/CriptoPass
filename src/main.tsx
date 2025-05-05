import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LoginPage from './Components/LoginPage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>,
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})

