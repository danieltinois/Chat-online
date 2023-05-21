import React from "react";
import axios from "axios";

import "./App.css";

type AuthPageProps = {
  onAuth: (authData: { username: string; secret: string }) => void;
};

const AuthPage: React.FC<AuthPageProps> = (props) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = (e.target as HTMLFormElement).elements.namedItem(
      "username"
    ) as HTMLInputElement;
    const value = input.value;
    axios
      .post("http://localhost:3001/authenticate", { username: value })
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log("error", e));
  };

  return (
    <div className="background">
      <div className="mainLogin">
        <form onSubmit={onSubmit} className="auth-form">
          <div className="form-title">Welcome 👋</div>

          <div className="form-subtitle">Set a username to get started</div>

          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
