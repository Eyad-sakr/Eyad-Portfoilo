import {  useEffect, useState } from "react"
import Logo from "../Logo/Logo"
import HeaderNav from "./HeaderNav";
import HamburgerNav from "./HamburgerNav";
function Header() {
    const [isOpen, setIsOpen]=useState<boolean>(false);
    const [Scrolled,setIsScrolled]=useState(false);
    useEffect(()=>{
       const HandelScroll = ()=>setIsScrolled(window.scrollY > 30);
       window.addEventListener('scroll',HandelScroll);
       return()=>window.removeEventListener('scroll',HandelScroll); 
    },[])
  return (<>
  
  <header style={{background:Scrolled ? '#060a10':'',backdropFilter:Scrolled ? 'blur(20px)':'' ,borderBottom:Scrolled ? '1px solid #00C8FF':'' }}>
    <div className="container ">
    <Logo/>
    <HamburgerNav isOpen={isOpen} setIsOpen={setIsOpen} />
    <HeaderNav />
    </div>
  </header>
    </>
  )
}

export default Header