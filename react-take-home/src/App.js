import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
// import Subscriptions from './components/Subscriptions';
import Teas from './components/Teas';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/customers" element={<Customers />} /> */}
          <Route path="/teas" element={<Teas />} />
          {/* <Route path="/subscriptions" element={<Subscriptions />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
