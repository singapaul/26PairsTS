import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import { auth } from "./Firebase/Firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import View from "./View";

const Reset = ({path}: {path:string}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      // @ts-ignore
      await sendPasswordResetEmail(auth, email);
      navigate(`/app/login`);
    } catch (err) {
            // @ts-ignore
      setError(err.message);
    }
  };

  return (
    <View title="Forgot Password">
      <div className="login">
        <div className="login__container">
          {error && <div className="auth__error">{error}</div>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
            <button>Forgot Password</button>
          </form>
          <div>
            Already have an account? <Link to="/app/login">Login</Link> now.
          </div>
          <div>
            Don't have an account? <Link to="/app/register">Register</Link> now.
          </div>
        </div>
      </div>
    </View>
  );
};

export default Reset;
