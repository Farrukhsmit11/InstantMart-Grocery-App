import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import setupInterceptor from './utils/Interceptor.js'
import { Provider } from "react-redux"
import { store } from "./store/store.js"
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/variables.css";
import "./styles/global.css"
import "./styles/utilities.css"
import "./styles/colors.css"
import "./styles/fonts.css"
import { BrowserRouter } from 'react-router-dom'

setupInterceptor();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
