import { RoutesApp } from './routes/index'
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global'
import AppProvider from './hooks'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'

function App() {
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
  );
}

export default App;