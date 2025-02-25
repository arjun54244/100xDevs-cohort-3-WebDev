import { useEffect, useRef, useState } from 'react'
import './App.css';
function App() {

  const [sockit, setSocket] = useState<WebSocket | null>(null)
  const [message, setMessage] = useState<string[]>([]);
  const inputRef =  useRef<HTMLInputElement>(null)

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080')
    setSocket(ws)
    ws.onmessage = (e) => {
      setMessage((prevMessages) => [...prevMessages, e.data])
    }
    ws.onclose = () => console.log("Disconnected from WebSocket server");
    ws.onerror = (error) => console.error("WebSocket error:", error);
    setSocket(ws);

    // return () => {
    //   ws.close();
    // };
  }, [])

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault(); 
    if (sockit && inputRef.current?.value) {
      sockit.send(inputRef.current.value);
      inputRef.current.value = ""; 
      inputRef.current.focus();
    }
  };
  return (
    <>
       <h1>WebSocket Chat</h1>
      <h2>Send Message</h2>
      <form className="d-flex" onSubmit={sendMessage}>
        <input className="form-control me-2" ref={inputRef} type="text" placeholder="Message..." value={"ping"} />
        <button className="btn btn-outline-success" type="submit">Send</button>
      </form>
      <h2>Received Messages</h2>
      <ul className="list-group overflow-auto" style={{maxHeight: "200px"}}>
        {message.map((msg, index) => (
          <li className="list-group-item" key={index}>{msg}</li>
        ))}
      </ul>
    </>
  )
}

export default App
