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
    if (location.state?.scrollTo) {
      const timer = setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 300)
      
      return () => clearTimeout(timer)
    } else {
      window.scrollTo(0, 0)
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