import { Link, useNavigate } from "react-router-dom";

function ServiceCollaborate() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  return (
    <div className="Collaborate">
      <div className="Collaborate-Heading">
        <h5>// Have a Project in Mind?</h5>
        <h1>Let's Build Something Great Together</h1>
        <p>Have an idea for a website? Let's turn it into a clean, responsive and professional digital experience.</p>
      </div>
      <div className="Collaborate-button">
        <Link 
          to="#" 
          onClick={(e) => {
            e.preventDefault();
            handleContactClick();
          }}
          className="collaborate-button"
        >
          Let's Collaborate
        </Link>     
      </div>
    </div>
  );
}

export default ServiceCollaborate;