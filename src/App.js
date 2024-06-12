import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react';
import {
  Route,
  Routes,
  BrowserRouter as Router
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const displayAlert = (message, type) => {
    setAlert({
      msg: message,
      alertType: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#161b22";
      displayAlert("Dark mode has been Enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      displayAlert("light mode has been Enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextSmith" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />

        <Routes>
          <Route extact path="/" element={<TextArea heading="TextSmith: Refine, Convert, Replicate, Clear." displayAlert={displayAlert} mode={mode} />} />
          <Route extact path="about" element={<About mode={mode} />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
