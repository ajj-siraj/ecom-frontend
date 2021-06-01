import { Link } from "react-router-dom";

function LoginButtons() {
  return (
    <div>
      <Link to="/signup">
        <a className="btn btn-outline-dark">Sign Up</a>
      </Link>
      <Link to="/login">
        <a className="btn btn-outline-dark">Login</a>
      </Link>
    </div>
  );
}

export default LoginButtons;
