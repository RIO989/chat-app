import './App.css';
import {useEffect,useState} from 'react';
import database from './firebase';
import firebase from 'firebase';

function App() {
  const [input,setInput]=useState("");

  const [list, setList]=useState([]);
  const [username,setUsername]=useState('Guest');
  useEffect(()=>{
    const name= window.prompt("Enter a Username");
    setUsername(name);
  },[]);
  useEffect(() => {

    database.collection('messages').orderBy("timestamp",'desc').onSnapshot((snapshot)=>{
      setList(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
      })));
    });
  },[]);

  const sendMessage = (event) => {
    event.preventDefault();
    const chatMessage={
      name:username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    }
    database.collection('messages').add(chatMessage)

    
    setInput("");
  };

  console.log(input);
  return ( 
    <div className='app'>
      <h1>Le-Chat</h1>


      {list.map(({id,data:{message,timestamp,name}}) =>(
        <h3 className='chatMessage' key={id}>
          {name}:{message}</h3>
      ) )}
      <form>
      <input value={input} onChange={(event) => setInput(event.target.value)}/>
      <button onClick={sendMessage} type="submit">SEND</button>
      </form>
    </div>
  );
}

export default App;
