import './Home.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function Home() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/subscriptions')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setSubscriptions(data.data);
      })
      .catch((err) => setError(err.message));
  }, []);

  const filteredSubscriptions = subscriptions.filter((subscription) =>
    subscription.attributes.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) return <div>Error: {error}</div>;
  if (!subscriptions.length) return <div>Loading...</div>;

  return (
    <div className="Home">
      <h1>Welcome to Tea Subscriptions!</h1>
      <Link to={"/teas"}>
      <h2>Checkout Our Tea Selection</h2>
      </Link>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search subscriptions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <section className="section">
        <h2>Our Subscriptions</h2>
        {filteredSubscriptions.length > 0 ? (
          filteredSubscriptions.map((subscription) => (
            <div className="subscription-card" key={subscription.id}>
              <Link to={`/subscriptions/${subscription.id}`} >
                <h3>{subscription.attributes.title}</h3>
              </Link>
              <h4>Teas Included:</h4>
              <ul className="teas-list">
                {subscription.attributes.teas.map((tea) => (
                  <li key={`${subscription.id}-${tea.id}`}>
                    <strong>{tea.title}</strong>: {tea.description}
                    <p>Brew Time: {tea.brew_time} mins</p>
                    <p>Temperature: {tea.temperature}°F</p>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No subscriptions found matching your search.</p>
        )}
      </section>
    </div>
  );
}

export default Home;
