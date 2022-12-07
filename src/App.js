import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Navbar from "./pages/Navbar"


function App() {
  return (
    <div>
    <Navbar/>
    <Router>
    <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/schedule' exact element={<Schedule/>} />
          /
      </Routes>
      </Router>
      </div>
  );
}

export default App;
