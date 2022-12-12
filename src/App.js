import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Navbar from "./pages/Navbar"


function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <div>
          <Route path='/' exact element={<Home />} />
          <Route path='/schedule' exact element={<Schedule />} />
        </div>
      </Router>
    </div>
  );
}

export default App;
