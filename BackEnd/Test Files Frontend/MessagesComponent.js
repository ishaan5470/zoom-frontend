import { useEffect, useState } from 'react';
import io from "socket.io-client"
import './App.css';
import axios from 'axios';


let socket;
const CONNECTION_PORT = 'http://localhost:8000/';

function App() {

  const [room, setRoom] = useState('')
  const [messageList, setMessageList] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    socket = io(CONNECTION_PORT)
  }, [CONNECTION_PORT])

  // call the api getMessages --> post request --> body: {roomid}
  // update the result in setMessageList array
  const fetchMessages = async () =>{
    try{
      console.log('fetching existing messages...')
      await axios({
        method: 'POST',
        url:'http://localhost:8000/users/chat/getMessages',
        data:{
          roomid: room
        },
      }).then(result => {
        setMessageList([...result.data.data])
      })
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    if(room)
      fetchMessages()
  }, [room])

  useEffect(() => {
    // define receive message socket and take the result given by socket
    // update the messages array in useState
    console.log('this useEffect is not triggering')
    socket.on('receive_message', (data) => {
      setMessageList((prev) => [...prev, data])
      setMessage('')
    })
  })

  const connectToRoom = () => {
    // call the api --> post request --> body: {userid}
    // get the room
    async function fetchRoom(){
      try{
        await axios({
          method: 'POST',
          url: 'http://localhost:8000/users/chat/sendRoom',
          data:{
            userid: '643ab768d3a35e36b6bdf366'
          }
        }).then(result => {
          console.log(result.data.data)
          setRoom(result.data.data)
        })
      }catch(err){
        console.log(err)
      }
    }
    fetchRoom()
    
    // call the socket
    socket.emit('join_room', room)
    // update room number state by setRoom()
  }

  const sendMessage = () => {
    // body should be format of data = {room, message}
    // emit the socket data
    console.log('sending', message)
    socket.emit('send_message', {room, message})
  }

  return(
    <div className='App'>
      <h1 className='hedding'>Socket trails</h1>
      {/* Click on User name ==> connect to room button, for testing purpose, take a userid existed in database except senders */}
      <button onClick={connectToRoom}>connect room</button>

      {/* message input */}
      <input type='text' onChange={(e) => setMessage(e.target.value)}/>
      
      {/* send message button, for testing purpose, we can send a static message */}
      <button onClick={sendMessage}>send message</button>
      
      {/* create a loop which loops through getMessages */}
      {messageList.map((message) =>{
        return <p key={message.time}>{message.data} </p>
      })}

    </div>
  )
}

export default App;
