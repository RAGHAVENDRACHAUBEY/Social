import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialMedia</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on social.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Confirm Password" className="loginInput" />
            <button className="loginButton">
              {" "}
              <a href="/" style={{ color: "#fff" }}>
                Sign Up
              </a>
            </button>
            <button className="loginRegisterButton">
              <a href="/" style={{ color: "#fff" }}>
                Log into Account{" "}
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
