import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showAlert = (message, type)=>{
    setalert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      showAlert(null)
    }, 2000);

  }
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor="#042743"
      showAlert("Dark mode has been enabled", "success")
    } 
    else {
      setmode("light");
      document.body.style.backgroundColor="white"
      showAlert("Dark mode has been closed", "warning")
    }
  };
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode}  />
      <Alert alert={alert}/>
      <div className="container my-3" >
        <TextForms heading="Enter the text to analyse" mode={mode} showAlert={showAlert}/>
      </div>
        {/* <About/> */}
     
    </>
  );
}

export default App;
