import './Home.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function Home() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [error, setError] = useState(null);

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

  if (error) return <div>Error: {error}</div>;
  if (!subscriptions.length) return <div>Loading...</div>;

  return (
    <div className="Home">
      <h1>Welcome to Tea Subscriptions!</h1>

      <section className="section">
        <h2>Our Subscriptions</h2>
        {subscriptions.map((subscription) => (
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
        ))}
      </section>
      <section className="section">
        <h2>All Available Teas in Subscriptions</h2>
        <div className="teas-section">
          {[
            ...new Map(
              subscriptions
                .flatMap((subscription) => subscription.attributes.teas)
                .map((tea) => [tea.id, tea])
            ).values(),
          ].map((tea) => (
            <div className="tea-card" key={tea.id}>
              <h4>{tea.title}</h4>
              <p>{tea.description}</p>
              <p>Brew Time: {tea.brew_time} mins</p>
              <p>Temperature: {tea.temperature}°F</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
