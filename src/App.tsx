import { useEffect } from "react"
import { useTranslation } from 'react-i18next'
import { Route, Routes, useLocation } from "react-router-dom"
import Header from "./Components/Header/Header"
import Hero from "./Components/Hero/Hero"
import AboutMe from "./Components/AboutMe/AboutMe"
import Skills from "./Components/Tech/TechSkills"
import Projects from "./Components/Projects/Projects"
import Services from "./Components/Services/Services"
import Footer from "./Components/Footer/Footer"
import ServicePage from "./Page/ServicePage"
import Contact from "./Components/GetInTouch/Contact"
import SectionDivider from "./Components/ui/SectionDivider"
import './styles/App.css'

function HomeContent() {
  const location = useLocation()
  const { i18n } = useTranslation()

  useEffect(() => {
    const htmlElement = document.documentElement
    htmlElement.lang = i18n.language
    htmlElement.dir = i18n.language.startsWith('ar') ? 'rtl' : 'ltr'    
  }, [i18n.language])

  useEffect(() => {
  const target = location.state?.scrollTo
  if (!target) {
    window.scrollTo({ top: 0, behavior: 'instant' })
    return
  }

  const scrollToTarget = (behavior: ScrollBehavior) => {
    const el = document.getElementById(target)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY 
      window.scrollTo({ top, behavior })
    }
  }

  const t1 = setTimeout(() => scrollToTarget('smooth'), 400)
  const t2 = setTimeout(() => scrollToTarget('smooth'), 1000) 

  return () => {
    clearTimeout(t1)
    clearTimeout(t2)
  }
}, [location])

  return (
    <>
      <Header />
      <Hero />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <AboutMe />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeContent />} />
      <Route path="/Service/:id" element={<ServicePage />} />
    </Routes>
  )
}

export default App