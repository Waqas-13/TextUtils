import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import TextForm from './components/TextForm.jsx'
import Alert from './components/Alert.jsx'
import About from './components/About.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode,setMode] = useState('light');
   const[alert,setalert]= useState(null);

   const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
      
    }, 1500);
   }
  const toggleMode=()=>{
    if (mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showalert("dark mode has been enabled",'sucess')
      document.title = 'textUtils-DarkMode'
    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showalert('light mode has been enbaled','sucess')
      document.title = 'textUtils-lightMode'
    }
  }

  return (
    <>
    {/* <BrowserRouter> */}
      <Router>
        <Navbar title="TextUtils" abouttext="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3 ">
          <Routes>
            <Route path="/" element={<TextForm showalert={showalert} Heading="Enter your text here" summery="yours summery here" mode={mode} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App
