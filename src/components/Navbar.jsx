import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">

      <div className="container">

        <Link
          to="/"
          className="navbar-brand"
        >
          📚 Library Management
        </Link>

        <Link
          to="/add-book"
          className="btn btn-primary"
        >
          + Add Book
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;