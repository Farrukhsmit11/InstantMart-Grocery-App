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

setupInterceptor();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
