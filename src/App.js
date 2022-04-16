import { ChatEngine } from "react-chat-engine";
import "./App.css";
import LoginForm from "./components/LoginForm";

import React from "react";
import ChatFeed from "./components/Chatfeed";

function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="0a948c0b-790d-434e-b9f1-406bd3e04f16"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
