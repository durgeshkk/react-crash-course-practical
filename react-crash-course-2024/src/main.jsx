import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <h1>Hello World, this is Durgesh Khandelwal</h1>
    <h2>"Giving up is not in the blood sir, it's not in the blood."</h2> */}
  </StrictMode>,
) 
