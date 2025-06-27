import './assets/index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Devsktop } from './app/devsktop'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

createRoot(rootElement).render(
  <StrictMode>
    <Devsktop />
  </StrictMode>,
)
