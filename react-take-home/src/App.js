import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Subscriptions from './components/Subscriptions';
import Teas from './components/Teas';
import Customer from './components/Customer';


function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teas" element={<Teas />} />
          <Route path="/subscriptions/:id" element={<Subscriptions />} />
          <Route path="/customers/:id" element={<Customer />} />
        </Routes>
      </div>
  );
}

export default App;
