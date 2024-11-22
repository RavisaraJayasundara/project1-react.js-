
import './App.css';
import Home from './pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Profile from './pages/Profile';
import About from './pages/About';
import Firstpage from './pages/Firstpage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App"> 
    
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Firstpage/>}>   
          </Route>
            <Route path="/Home" element={<Home/>}></Route>
            <Route path="/Profile" element={<Profile/>}></Route>
            <Route path="/About" element={<About/>}></Route>
          </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
