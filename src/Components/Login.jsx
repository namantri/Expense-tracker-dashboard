import React, { useState } from "react";
import "./Login.css";
const Login = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="login-body">
      <div
        class={active ? "container right-panel-active" : "container"}
        id="container"
      >
        <div class="form-container sign-up-container">
          <form action="#" className="login-form">
            <h1 className="heading-login">Create Account</h1>
            <div class="social-container">
              <a href="#" class="social">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-google-plus-g"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="btn-login">Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form action="#" className="login-form">
            <h1 className="heading-login">Sign in</h1>
            <div class="social-container">
              <a href="#" class="social">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-google-plus-g"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button className="btn-login">Sign In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1 className="heading-login">Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button 
                class="btn-login ghost"
                id="signIn"
                onClick={() => setActive(false)}
              >
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1 className="heading-login">Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button onClick={() => setActive(true)} class="btn-login ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
