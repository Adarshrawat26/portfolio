import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import App from './App.tsx'
import Workshop from './Workshop.tsx'
import WorkshopArticle from './WorkshopArticle.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/workshop/:slug" element={<WorkshopArticle />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  </StrictMode>,
)
