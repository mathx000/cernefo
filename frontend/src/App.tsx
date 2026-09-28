import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Servicos from './pages/Servicos'
import Abordagem from './pages/Abordagem'
import Patrimonio from './pages/Patrimonio'
import Equipa from './pages/Equipa'
import Contacto from './pages/Contacto'
import Marca from './pages/Marca'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/abordagem" element={<Abordagem />} />
          <Route path="/patrimonio" element={<Patrimonio />} />
          <Route path="/equipa" element={<Equipa />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/marca" element={<Marca />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <div className="fixed bottom-6 right-6 z-40">
        <ThemeToggle />
      </div>
    </div>
  )
}
