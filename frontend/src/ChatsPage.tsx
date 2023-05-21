import { FC } from "react";
import { PrettyChatWindow } from "react-chat-engine-pretty";

import "./App.css";

type ChatsPageProps = {
  user: {
    username: string;
    secret: string;
  };
};

const ChatsPage: FC<ChatsPageProps> = ({ user }) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="af8d400c-b7f5-4d57-8cfe-334c764c5388"
        username={user.username}
        secret={user.secret}
        style={{ height: "100vh" }}
      />
    </div>
  );
};

export default ChatsPage;
