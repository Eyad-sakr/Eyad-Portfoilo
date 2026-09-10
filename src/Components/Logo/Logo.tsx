import { Link } from "react-router-dom"

function Logo() {
  return (
    <Link to="/" className="Logo">
        <span>&lt;</span> 
            Eyad<span>Dev /&gt;</span>
    </Link>
  )
}

export default Logo