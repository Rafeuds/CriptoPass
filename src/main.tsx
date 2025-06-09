import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import LoginPage from './Routes/LoginPage.tsx'
import AboutPage from './Routes/AboutPage.tsx'
import PasswordPage from './Routes/PasswordPage.tsx'



//Lista de rotas da aplicação
const router = createBrowserRouter([

    {
    path: "/",
    element: <LoginPage />
  },

    {
    path: "/About",
    element: <AboutPage />
  },

    {
    path: "/Password",
    element: <PasswordPage />
  },


])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})

