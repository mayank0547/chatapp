import React, { useEffect, useRef, useState } from "react";
import openai from "openai"; // Make sure you've installed the 'openai' library
import "./AI.css";
import axios from 'axios';
function AI() {
  const humanMessage = useRef();
  const botMessage = useRef();
  const inputRef = useRef();

  const [image, setImage] = useState(""); // Provide the URL for your chatbot's image


  const handleInput = async () => {
    const botMessageElement = botMessage.current;
    const userMessageElement = humanMessage.current;
    const inputElement = inputRef.current;

    const userInput = inputElement.value.trim();
    inputElement.value = "";

    if (userInput) {
      userMessageElement.innerText = userInput;
      botMessageElement.innerText = "Typing...";
      try {
        const response= await sendRequestToGPT3(userInput);
        botMessageElement.innerText = response;
      } catch (error) {
        console.error("Error while communicating with GPT-3:", error);
        botMessageElement.innerText = "Sorry, something went wrong.";
      }
    }
  };

 
  const sendRequestToGPT3 = async (userInput) => {
   
    const options = {
      method: 'GET',
      url: 'https://ai-chatbot.p.rapidapi.com/chat/free',
      params: {
        message: userInput,
        uid: 'user1'
      },
      headers: {
        'X-RapidAPI-Key': 'fa298c37ecmshf8475f9a26b815bp1c4721jsn5038cd0991b3',
        'X-RapidAPI-Host': 'ai-chatbot.p.rapidapi.com'
      }
    };
    
    try {
      const respo = await axios.request(options);
      const responseText = (respo.data.chatbot.response?respo.data.chatbot.response:"I'm not sure how to respond");
         return responseText;
    } catch (error) {
      console.error(error);
    }  
    };
   

  return (
    <div className="App">
      <div className="wrapper with-background">
        <div className="content">
          <div className="header">
            <div className="img">
              <img src='https://media.istockphoto.com/id/1420621599/photo/small-robot-assistant-think-or-analyze.jpg?s=612x612&w=0&k=20&c=4ly28xQ_X0mF46k3Vz4zFxaQ0Mj8j4ZIzkhAWmbNMwU=' alt="" />
            </div>
            <div className="right">
              <div className="name">ChatBot</div>
              <div className="status">Active</div>
            </div>
          </div>
          <div className="main">
            <div className="main_content">
              <div className="messages">
                <div className="bot-message" ref={botMessage}></div>
                <div className="human-message" ref={humanMessage}></div>
              </div>
            </div>
          </div>
          <div className="bottom" >
            <div className="btm">
              <div className="input">
                <input
                  type="text"
                  placeholder="Enter your message"
                  ref={inputRef}
                />
              </div>
              <div className="btn">
                <button onClick={handleInput}>
                  <i className="fas fa-paper-plane"></i> Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AI;
