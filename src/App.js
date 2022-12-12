import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Navbar from "./pages/Navbar"


function App() {
  return (
    <>
      <Router>
        <div>
          <Route path='/' exact element={<Home />} />
          <Route path='/schedule' exact element={<Schedule />} />
        </div>
      </Router>
    </>
  );
}

export default App;
