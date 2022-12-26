import { useState } from 'react';
import './App.css';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'

// To-do : Enable dark mode on About component

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const handleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
    }
  }
  return (
    <>
    <BrowserRouter> 
    <div>
    <Navbar title="TextUtils" mode={mode} toggleMode={handleMode} />
    <Alerts alert={alert}/>
    <div className='container my-3'>
      <Routes>
          <Route path="/" element={<Textform title= "Enter the text you want to analyse" mode={mode} alerts={alert} showAlert={showAlert}/>}>
          </Route>
          <Route path="/about" element={<About />} >
          </Route>
      </Routes>
    </div>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
