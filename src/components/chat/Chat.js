import React, { useContext, useState, useEffect, useRef } from "react";
import "./Chat.css";
import { authContext } from "../useContext/UserAuthContext";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Chat = () => {
  const { user } = useContext(authContext);
  console.log("user", user);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const divRef = useRef(null);

  const getMessage = (e) => {
    setMessage(e.target.value);
  };

  //function for sending messages or adding them into the firestore and the app itself
  const sendMessage = async () => {
    const docRef = await addDoc(collection(db, "chatMessages"), {
      name: user.displayName,
      text: message,
      time: new Date(),
      userId: user.uid,
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

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div className="chatContainer">
      <h1 className="titleChat">Chat</h1>
      <div className="messagePosition">
        {chatMessages &&
          chatMessages.map((msg, index) => (
            <div
              key={index}
              className={
                msg.userId.includes(user.uid) ? "message-me" : "message-other"
              }
            >
              {/* {console.log("msg", msg)} */}
              <Card style={{ width: "18rem" }}>
                <Card.Header
                  className={
                    msg.userId.includes(user.uid)
                      ? "card-header-me"
                      : "card-header-other"
                  }
                >
                  {msg.name}{" "}
                  <span className="smallTime">
                    {msg.time.toDate().toLocaleString("de")}
                  </span>
                </Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item
                    className={
                      msg.userId.includes(user.uid)
                        ? "message-text-me"
                        : "message-text-other"
                    }
                  >
                    {msg.text}
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
          ))}
      </div>

      <div className="inputButtonPosition">
        <input type="text" className="inputField" onChange={getMessage}></input>
        <BsFillArrowRightCircleFill
          className="sendArrow"
          onClick={sendMessage}
        />
      </div>
      <div ref={divRef} />
    </div>
  );
};

export default Chat;
