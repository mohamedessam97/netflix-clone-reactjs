import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home'
import Movies from './pages/Movies/Movies'
import {storage} from './firebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [prog , setProg]=useState(0)
  const formHandler=(e)=>{
    e.preventDefault();
    const file=e.target[0].files[0];
    upload(file);
  }

  const upload=(file)=>{
    const storageRef=ref(storage ,`/files/${file.name}`)
    const uploadTask=uploadBytesResumable(storageRef , file)
    uploadTask.on("state_changed" , (snapshot)=>{
      const progs =Math.round(
        (snapshot.bytesTransferred/snapshot.totalBytes )*100
      )
      setProg(progs)
    },
    (err)=>console.log(err),
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then(url => console.log(url))
    }
    );
  }
  return (
    <div className="App">
      
      <Navbar />
      {/* <Home /> */}
      <Movies />
    </div>

  );
}

export default App;
