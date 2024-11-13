import React, { useState, useEffect } from 'react';
import './Teas.css'; // Ensure you have this CSS file

function Teas() {
  const [teas, setTeas] = useState([]);

  useEffect(() => {
    // Fetch teas from the API using fetch
    fetch('http://localhost:3000/api/v1/teas')
      .then(response => response.json())
      .then(data => {
        setTeas(data.data);
      })
      .catch(error => {
        console.error("Error fetching teas:", error);
      });
  }, []);

  return (
    <div className="teas">
      <h2>Discover Our Teas</h2>
      <div className="tea-list">
        {teas.map((tea) => (
          <div key={tea.id} className="tea-card">
            <div className="tea-details">
              <h3>{tea.attributes.title}</h3>
              <p>{tea.attributes.description}</p>
              <p>Temperature: {tea.attributes.temperature}°C</p>
              <p>Brew time: {tea.attributes.brew_time} minutes</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teas;
