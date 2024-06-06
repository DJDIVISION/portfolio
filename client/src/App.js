import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from './pages/Home'
import APICalls from './pages/APICalls';
import PWA from './pages/PWA';



function App() {

  return (
    <Router>
      <AnimatePresence wait>
      <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/apicalls" element={<APICalls />}/>
      <Route exact path="/pwa" element={<PWA />}/>
      </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;


