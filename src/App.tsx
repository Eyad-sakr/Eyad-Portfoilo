import Header from "./Components/Header/Header"
import './Components/styles/App.css'
import Hero from "./Components/Hero/Hero"
import AboutMe from "./Components/AboutMe/AboutMe"
import Skills from "./Components/Tech/TechSkills"
import Projects from "./Components/Projects/Projects"
import Demo from "./Components/GetInTouch/Contact"
import Services from "./Components/Services/Services"
import Footer from "./Components/Footer/Footer"

function App() {
  return (<>
    <Header/>
    <Hero/>
    <div className="section-divider"> <span className="section-divider-dot"></span></div>
    <Services/>
        <div className="section-divider"> <span className="section-divider-dot"></span></div>

    <AboutMe/>
        <div className="section-divider"> <span className="section-divider-dot"></span></div>

    <Skills/>
        <div className="section-divider"> <span className="section-divider-dot"></span></div>

    <Projects/>
        <div className="section-divider"> <span className="section-divider-dot"></span></div>

    < Demo/>
    <Footer/>
    </>
  )
}

export default App