import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
//import { App } from "./App.jsx";
import { Practices } from "./Interview-Questions/Practices.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Practices />
  </StrictMode>,
)
