import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
import db from "./firebase";
import { Link } from "react-router-dom";
function SidebarChat({ id, name, addNewChat }) {
  const [messages, setMessages] = useState([]);
  const createChat = () => {
    let roomName = prompt("enter chat name");
    roomName = roomName.trim();
    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src="data:image/jpeg;base64,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" />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="sidebarChat" onClick={createChat}>
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;
