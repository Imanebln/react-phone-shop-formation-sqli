import React from "react";
import "../../styles/styles.css";
function LoginModal() {
  return (
    <div class="auth">
      <form action="" class="login-form">
        <h3>Login Now</h3>
        <input type="email" placeholder="your email" class="box" />
        <input type="password" placeholder="your password" class="box" />
        <p>
          Forget your password? <a href="#">Click Here</a>
        </p>
        <p>
          Don't have an account? <a href="#">Create now</a>
        </p>
        <input type="submit" value="Login now" class="btn" />
      </form>
    </div>
  );
}

export default LoginModal;
