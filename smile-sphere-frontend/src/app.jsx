import AppProvider from './hooks'
import { BrowserRouter } from 'react-router-dom'
import { RoutesApp } from './routes/index'

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css'

import { GlobalStyle } from './themes/global'

export function App() {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <RoutesApp />
        </AppProvider>

        <GlobalStyle />
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}