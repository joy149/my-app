import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [mode, setMode] = useState('light');
  const handleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={handleMode} />
    <div className='container my-3'>
    <Textform title= "Enter the text you want to analyse" mode={mode}/>
    </div>
    </>
  );
}

export default App;
