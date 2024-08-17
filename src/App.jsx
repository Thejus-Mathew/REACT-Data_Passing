import { useState } from 'react';
import './App.css';
import User1 from './User1';
import Student from './Student';

function App() {
  const[username,setUsername] = useState("Beegaran")
  const[userage,setUserage] = useState(25)
  const[usernumber,setUsernumber] = useState("9961139251")
  const[useremail,setUseremail] = useState("beegaran@gmail.com")
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>User Details</h1>
      <User1 usenam = {username} useage = {userage} usenum = {usernumber} useema = {useremail}/>
      <Student/>
    </div>
  );
}

export default App;
