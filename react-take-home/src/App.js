import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Subscriptions from './components/Subscriptions';


function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscriptions/:id" element={<Subscriptions />} />
        </Routes>
      </div>
  );
}

export default App;
