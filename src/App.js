

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Navbar></Navbar>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path='/about' element={<About />}/>
<Route path='/contact' element={<Contact/>}/>
</Routes>


</BrowserRouter>
  
    </div>
  );
}

export default App;
