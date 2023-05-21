import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState<
    { username: string; secret: string } | undefined
  >(undefined);

  const handleAuth = (user: { username: string; secret: string }) => {
    setUser(user);
  };

  if (!user) {
    return <AuthPage onAuth={handleAuth} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;
