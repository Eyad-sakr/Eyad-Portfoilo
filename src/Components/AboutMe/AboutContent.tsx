import FadeUp from "../FadeUp";
import AboutStats from "./AboutStats";
function AboutContent() {
  return (
    <div className="Content">
      <FadeUp>
      <span className="Main-Heading">// ABOUT ME</span>
        <h1>Passion Meets <span>Precision</span></h1>
        <p>I’m a Front-End Developer focused on building modern, responsive, and visually polished web interfaces using React,  and modern web technologies.
I enjoy transforming ideas and designs into scalable, reusable, and interactive user experiences while maintaining clean code and best development practices.
My goal is to build fast, accessible, and engaging web applications with smooth animations, responsive layouts, and attention to every detail that improves the user experience.</p>
</FadeUp>
    <AboutStats/>
    </div>
    
  )
}

export default AboutContent;