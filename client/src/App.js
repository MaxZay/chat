import './App.css';
import {createContext, useEffect, useState} from "react";
import { io } from 'socket.io-client'
import ChatPage from "./pages/ChatPage/ChatPage";

export const SocketContext = createContext(null)
export const CurrentUserContext = createContext(null)

function App() {
  const [socket, setSocket] = useState(null)
  const [userId, setUserId] = useState('')

  useEffect(() => {
    const sc = io('http://localhost:5000')
    setSocket(sc)

    sc.on('get id', (id) => {
      setUserId(id)
    })
  }, [])

  return (
    <SocketContext.Provider value={socket}>
      <CurrentUserContext.Provider value={userId}>
        <div className="App">
          <ChatPage />
        </div>
      </CurrentUserContext.Provider>
    </SocketContext.Provider>
  );
}

export default App;
