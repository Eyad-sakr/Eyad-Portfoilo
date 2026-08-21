import {  useEffect, useState } from "react"

function Skills() {
    const words = [
  "Frontend Developer",
  "React Developer",
  "Building Modern UI",
  "Scalable Frontend Solutions"
]
const [Text,setText] = useState('');
const [WordIndex,setWordIndex]=useState(0);
const [IsDeleting,setIsDeleting] = useState(false);
const CurrentWord = words[WordIndex];
useEffect(()=>{
    const timer = setTimeout(()=>{
        if(IsDeleting){
             setText(prev => prev.slice(0, -1));
             if(Text.length<=1){
                setIsDeleting(false);
                setWordIndex(prev => (prev + 1) % words.length)
             }
        }else {
      setText(CurrentWord.slice(0, Text.length + 1));

      if (Text.length === CurrentWord.length) {
        setIsDeleting(true);
      }
    }
        
    },IsDeleting ? 90 : 130)
return () => clearTimeout(timer);
},[Text, IsDeleting, WordIndex])
  return (
    <div className="Skills"> 
    <span className="DollarSign">$ </span>
    <span className="Words">{Text}</span>
    <span className="Delete">▊</span>
    </div>
  )
}

export default Skills