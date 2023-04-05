import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <div className="login__text">
          <h1>Sign in to app</h1>
        </div>
        <Button onClick={signIn}>Sign in</Button>
      </div>
    </div>
  );
}

export default Login;
