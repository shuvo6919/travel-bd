import { Link, useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { AuthContext } from "../../Providers/AuthProvider";

import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
const Login = () => {
  const { emailLogin, googleLogin } = useContext(AuthContext);
  const errNotify = (msg) => toast.error(msg, { position: "bottom-right" });
  const succNotify = (msg) => toast(msg, { position: "bottom-right" });

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const checked = e.target.checkbox.checked;

    if (checked) {
      succNotify("Saved Email and Password");
    }

    emailLogin(email, password)
      .then((result) => {
        console.log(result.user);
        succNotify("Successfull Logged in");
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        errNotify(err.code);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        navigate(location.state ? location.state : "/");
        succNotify("Successfully Logged in");
      })
      .catch((err) => {});
  };
  return (
    <div className="login-container">
      <div className="overlay"></div>
      <img src="https://i.imghippo.com/files/VG8pL1714890890.jpg" alt="" />
      <div className="login-form-container">
        <form onSubmit={handleLogin} className="login-form">
          <h3>Email</h3>
          <input className="input-field" type="email" name="email" />
          <h3>Password</h3>
          <input className="input-field" type="password" name="password" />
          <div className="checkbox">
            <input type="checkbox" name="checkbox" /> <h4>Remember Me</h4>
          </div>
          <Link>
            <h4 className="forgot-pass">Forgot Password?</h4>
          </Link>
          <input className="button" type="submit" value="Login" />
          <h4>
            Do not have an accout?{" "}
            <Link to={"/signup"} className="create-account">
              Create an account
            </Link>
          </h4>
        </form>
        <button onClick={handleGoogleLogin} className="continue-btn">
          <FaGoogle />
          Login with Google
        </button>
        <button className="continue-btn">
          <FaFacebookF />
          Login with Facebook
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
