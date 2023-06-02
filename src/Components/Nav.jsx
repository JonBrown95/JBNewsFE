import { Link } from "react-router-dom";

const Nav = () => {

    return (
    <nav className="navbar">
    <ul className="navbar-ul">
      <li>
        <Link to="/" className="nav-li">
          JB-News
        </Link>
      </li>
      
      <li>
        <Link to="/articles" className="nav-li">
          Articles
        </Link>
        </li>
        <li>
        <Link to="/topics" className="nav-li">
          Topics
        </Link>
        </li>
        </ul>
     
      </nav>
     

      )}

      export default Nav