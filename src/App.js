import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./pages/Navbar"


function App() {
  return (
    <div>
    <Navbar/>
    <Router>
    <Routes>
          <Route path='/' exact element={<Home/>} />
          /
      </Routes>
      </Router>
      </div>
  );
}

export default App;
