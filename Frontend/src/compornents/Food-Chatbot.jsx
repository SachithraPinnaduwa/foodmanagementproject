import HeaderInside from "./Header-Inside";
import "../componentsCss/Food-Chatbot.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { useState } from "react";
const API_KEY = "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";
import cloneDeep from 'lodash/cloneDeep';

var copyMessageList = [];
const systemMessage = { // system message to generate relevant prompts
  "role": "system", "content": "Give the answer if the user prompt is related to food management, if the user prompt is not related to food management, just answer with 'Ask only related to food management'."
}
const FoodChatbot = () => {
  // Typing Indicator
  const [typingIndicator, setTypingIndicator] = useState(false);

  // Message List
  const [messageList, setMessageList] = useState([
    {
      message: "How can I help you today?",
      sender: "ChatGPT",
    },
  ]);

  // Handle the user message
  const handleMessage = async (message) => {
    // Make the typing indicator visible
    setTypingIndicator(true);

    // Create a new message object for the user's input
    const newMessage = {
      message: message,
      sender: "User",
      direction: "outgoing",
    };

    // Update the message list with the new user message
    setMessageList([...messageList, newMessage]);

    // Copy of message list
    copyMessageList=[...messageList,newMessage];

    // Process the user's message with ChatGPT
    await processMessage([newMessage]);
  };

  // Process the message to send to ChatGPT
  async function processMessage(message) {
    // Map the messages to the format expected by the API
    let chatMessage = message.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    // Set up the request body for the ChatGPT API
    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,  // The system message DEFINES the logic of our chatGPT
        ...chatMessage  // The messages from our chat with ChatGPT
      ]
    }

    // Fetch from ChatGPT
    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      // Update the message list with the response from ChatGPT
      setMessageList([...copyMessageList  , {
        message: data.choices[0].message.content,
        sender: "ChatGPT"
      }]);
      // Hide the typing indicator
      setTypingIndicator(false);
    });
  }

  return (
    <div
      className="chat-main-container"
      
    >
    
      <div
        style={{
          paddingTop: "5%",
          position: "relative",
          height: "80vh",
          maxWidth: "90%",
          margin: "auto",
        }}
      >
        <MainContainer
          style={{
            boxShadow: "rgba(255, 255, 255, 0.35) 0px 0px  50px",
            height: "100%",
            borderRadius: "10px",
          }}
        >
          <ChatContainer>
            <MessageList
              typingIndicator={
                typingIndicator ? (
                  <TypingIndicator content="System is typing" />
                ) : null
              }
            >
              {/* Map through messageList to render messages */}
              {messageList.map((message, i) => (
                <Message key={i} model={message} style={{ paddingTop: "1%" }} />
              ))}
            </MessageList>
            {/* Include MessageInput component for user input */}
            <MessageInput
              placeholder="Type message here"
              onSend={handleMessage}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
};

export default FoodChatbot;