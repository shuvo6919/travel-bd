import { Link } from "react-router-dom";
import "./signup.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";
import travellerPic from "../../../src/assets/images/places/traveller.jpg";
const Signup = () => {
  const { emailSignUp } = useContext(AuthContext);

  const errNotify = (msg) => toast.error(msg, { position: "bottom-right" });
  const succNotify = (msg) => toast(msg, { position: "bottom-right" });

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const checked = e.target.checkbox.checked;

    if (password.length < 6) {
      errNotify("Password should have at least 6 digit");
      return;
    } else if (!/[A-Z]/.test(password)) {
      errNotify("Password should have at least one uppercase");
      return;
    } else if (password !== confirmPassword) {
      errNotify("Password doesn't match");
      return;
    } else if (!checked) {
      errNotify("Accept the terms and condtions");
      return;
    }

    emailSignUp(email, password)
      .then((result) => {
        console.log(result.user);
        succNotify("Successfully Created");
        updateProfile(result.user, {
          displayName: name,
          photoURL: travellerPic,
        });
      })
      .catch((err) => {
        errNotify(err.code);
      });
  };
  return (
    <div className="signup-container">
      <div className="overlay"></div>
      <img src="https://i.imghippo.com/files/x6fnz1714890790.jpg" alt="" />
      <div className="signup-form-container">
        <form onSubmit={handleSignUp} className="signup-form">
          <h3>Name</h3>
          <input className="input-field" type="text" name="name" />
          <h3>Email</h3>
          <input className="input-field" type="email" name="email" />
          <h3>Password</h3>
          <input className="input-field" type="password" name="password" />
          <h3>Confirm Password</h3>
          <input
            className="input-field"
            type="password"
            name="confirmPassword"
          />
          <div className="checkbox">
            <input type="checkbox" name="checkbox" />
            <h4>Accept terms and conditions</h4>
          </div>

          <input className="button" type="submit" value="signup" />
          <h4>
            Already have an accout?
            <Link to={"/login"} className="create-account">
              Login
            </Link>
          </h4>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
