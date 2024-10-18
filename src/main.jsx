import { createRoot } from 'react-dom/client'
import {App2} from './App.jsx'
import App from './App.jsx'
import { StrictMode } from 'react'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App email="vaibhav@gmail.com" age={20} isMarried={false} ></App>
    <App2 email="vaibhav@gmail.com" age={20} isMarried={false} ></App2>
  </StrictMode>
)
