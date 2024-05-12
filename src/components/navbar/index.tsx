import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/cadastro">cadastro</Link>
        </li>
        <li>
          <Link to="/admin">painel</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
