// import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import Textform from './componets/Textform';
// import About from './componets/About';
import React, { useState } from 'react';
import Alert from './componets/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";

let name = "javascript"
function App() {
  //this variable states whether dark mode is enabled or not

  const [mode, setmode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {

    setAlert(
      {
        msg: message,
        type: type
      }
    )

    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }


  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "#042743"
      console.log('dark set');
      showAlert("Dark mode has been set", "success ")
      document.title = "TextUtils - Dark Mode"
      setInterval(() => {
        // prompt("TextUtils Use Kar")
        // ye user expeirence ko bad karta hain

      }, 2000);
      setInterval(() => {
        document.title = "Abe Install kar";
      }, 1500);

    }
    else {
      setmode('light')
      document.body.style.backgroundColor = "white"
      console.log('light set');
      showAlert("Light mode has been set", "success ")
      document.title = "TextUtils - Light Mode"

    }
  }

  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils"/* aboutText="About"*/ mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container py-5">
        {/* <Switch> */}
        {/* <Route exact path='/about'> */}
        {/* <About /> */}
        {/* </Route> */}

        {/* <Route exact path='/' > */}
        <Textform showAlert={showAlert} heading="Enter your text here" title="Analyze your Text here " mode={mode}
        />
        {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* <About /> */}
      {/* </></Router> */}
    </>
  );
}


export default App;
