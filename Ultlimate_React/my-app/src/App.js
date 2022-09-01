import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import Textform from './componets/Textform';
import About from './componets/About';
import React, { useState } from 'react';
import Alert from './componets/Alert';


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

  }


  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "#042743"
      console.log('dark set');
      showAlert("Dark mode has been set", "success ")

    }
    else {
      setmode('light')
      document.body.style.backgroundColor = "white"
      console.log('light set');

    }
  }

  return (
    <>

      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container py-5">
        <Textform showAlert = {showAlert}  heading="Enter your text here" title="Analyze your Text here " mode={mode}  />
      </div>
      <About />

    </>
  );
}


export default App;
