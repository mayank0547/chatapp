import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import { useSelector } from "react-redux";
import { useState } from "react";
import { AppContext, socket } from "./context/appContext";
import Video from './components/Video'
function randomID(len) {
    let result = '';
    if (result) return result;
    var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
      maxPos = chars.length,
      i;
    len = len || 5;
    for (i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
  }
  
   function getUrlParams(url = window.location.href) {
    let urlStr = url.split('?')[1];
    return new URLSearchParams(urlStr);
  }
  

function App() {
    const [rooms, setRooms] = useState([]);
    const [currentRoom, setCurrentRoom] = useState([]);
    const [members, setMembers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [privateMemberMsg, setPrivateMemberMsg] = useState({});
    const [newMessages, setNewMessages] = useState({});
    const user = useSelector((state) => state.user);

     const roomID = getUrlParams().get('roomID') || randomID(5);

    return (
        <AppContext.Provider value={{ socket, currentRoom, setCurrentRoom, members, setMembers, messages, setMessages, privateMemberMsg, setPrivateMemberMsg, rooms, setRooms, newMessages, setNewMessages }}>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/room/:roomID' element={<Video />} />
                    {!user && (
                        <>
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                        
                        </>
                    )}
                    <Route path="/chat" element={<Chat roomID={roomID}/>} />
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
