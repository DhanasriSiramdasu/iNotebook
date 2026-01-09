import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import NoteState from './context/NoteState';
import Modal from './components/Modal';
import Login from './components/Login';
import Signup from './components/Signup';
import {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [alert,setAlert] = useState(null);
  const showAlert = (type,message)=>{
    setAlert({
      type: type,
      message: message
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  return (
    <div className="App"> 
      <NoteState showAlert={showAlert}>
      <Router>
        <Navbar />
        <Modal />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<Login showAlert={showAlert} />} />
          <Route path="/signup" element={<Signup showAlert={showAlert}/>} />
          <Route path="/home" element={
              localStorage.getItem("token") ? (
                <>
                  <Home showAlert={showAlert}/>
                  <Notes showAlert={showAlert}/>
                </>
              ) : (
                <Login showAlert={showAlert} />
              )
            }/>
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      </NoteState>
      
    </div>
  );
}

export default App;
