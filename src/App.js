import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import NoteState from './context/NoteState';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NoteState>
      <Router>
        <Navbar />
        <Alert message="This is alert section"/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Notes />
      </NoteState>
      
    </div>
  );
}

export default App;
