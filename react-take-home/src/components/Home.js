import './Home.css'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Tea Subscriptions</h1>
      <p>Discover your favorite tea subscription today!</p>
      <div className="navigation">
        <Link to="/customers">Manage Customers</Link>
        <Link to="/teas">View Teas</Link>
        <Link to="/subscriptions">Subscribe to Tea</Link>
      </div>
    </div>
  )
}

export default Home