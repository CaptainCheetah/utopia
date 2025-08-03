import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Utopia from './components/Utopia/Utopia.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Utopia />
  </StrictMode>
)
