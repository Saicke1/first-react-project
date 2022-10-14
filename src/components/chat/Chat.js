import React, { useContext, useState, useEffect } from "react";
import "./Chat.css";
import { authContext } from "../useContext/UserAuthContext";
import Button from "react-bootstrap/Button";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

const Chat = () => {
  const { user } = useContext(authContext);
  console.log("user", user);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const getMessage = (e) => {
    setMessage(e.target.value);
  };

  //function for sending messages or adding them into the firestore and the app itself
  const sendMessage = async () => {
    const docRef = await addDoc(collection(db, "chatMessages"), {
      name: user.displayName,
      text: message,
      time: new Date(),
    });
    console.log("Document and message have the id:", docRef.id);
    getWholeChat();
  };

  //function for getting the messages from firestore
  const getWholeChat = async () => {
    /* console.log("fetched messages"); */
    const allMessages = await getDocs(collection(db, "chatMessages"));
    const array = [];
    allMessages.forEach((each) => {
      // each.data() is never undefined for allMessages
      /* console.log("each", each);
      console.log(each.id, " => ", each.data()); */
      array.push(each.data());
    });
    const sortedArray = array.sort(
      (objA, objB) => Number(objA.time) - Number(objB.time)
    );
    setChatMessages(sortedArray);
    /* console.log("Array in chatMessages", chatMessages); */
  };

  useEffect(() => {
    getWholeChat();
  }, []);

  return (
    <div className="chatContainer">
      <h1>Das ist der Chat! perfekt, du bist eingeloggt. :D</h1>

      {chatMessages &&
        chatMessages.map((msg, index) => (
          <div key={index} className="oneMessageBox">
            <p>{msg.name}</p>
            <p>{msg.text}</p>
            <p>{msg.time.toDate().toLocaleString("de")}</p>
          </div>
        ))}

      <input type="text" className="inputField" onChange={getMessage}></input>
      <Button variant="primary" onClick={sendMessage}>
        Send
      </Button>
    </div>
  );
};

export default Chat;
