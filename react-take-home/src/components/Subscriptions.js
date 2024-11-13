import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Subscriptions.css'; // Importing the CSS file

function Subscription() {
  const { id } = useParams();
  const [subscription, setSubscription] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/subscriptions/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Subscription not found');
        }
        return response.json();
      })
      .then((data) => {
        setSubscription(data.data);
      })
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <div className="error">Error: {error}</div>;
  if (!subscription) return <div className="loading">Loading...</div>;

  return (
    <div className="subscription-container">
      <h1 className="subscription-title">Subscription Details</h1>

      <section className="subscription-details">
        <h2 className="subscription-name">{subscription.attributes.title}</h2>
        <div className="subscription-info">
          <p><strong>Price:</strong> ${subscription.attributes.price}</p>
          <p><strong>Status:</strong> {subscription.attributes.status}</p>
          <p><strong>Frequency:</strong> {subscription.attributes.frequency}</p>
        </div>

        <h3 className="teas-heading">Teas Included:</h3>
        <ul className="tea-list">
          {subscription.attributes.teas.map((tea) => (
            <li key={tea.id} className="tea-card">
              <h4 className="tea-title">{tea.title}</h4>
              <p className="tea-description">{tea.description}</p>
              <p><strong>Brew Time:</strong> {tea.brew_time} mins</p>
              <p><strong>Temperature:</strong> {tea.temperature}°F</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Subscription;
