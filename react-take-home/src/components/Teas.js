import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Teas.css'

function Teas() {
  const [teas, setTeas] = useState(null);

  function fetchTeas() {
    fetch("http://localhost:3000/api/v1/teas")
      .then((response) => response.json())
      .then((data) => {
        setTeas(data.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchTeas();
  }, []);

  if (!teas) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="teas-container">
      <div className="title">
        <h1 style={{color: 'white'}}>Welcome to my wonderful Tea Selection</h1>
      </div>
      <section className="tea-list">
        <div className="tea-cards-container">
          {teas.map((tea) => (
            <div key={tea.id} className="tea-item">
              <img src="https://media.istockphoto.com/id/1425367394/photo/liquid-splashing-out-from-a-blue-cup-mug.webp?a=1&b=1&s=612x612&w=0&k=20&c=tEk0C7Fuwo4M_UzybD9NtB2J0HWWLcPblIcWdabjkbU="/>
              <h3 className="tea-title">{tea.attributes.title}</h3>
              <p className="tea-description">{tea.attributes.description}</p>
              <p className="tea-brew-time">Brew Time: {tea.attributes.brew_time} mins</p>
              <p className="tea-temperature">Temperature: {tea.attributes.temperature}°F</p>
            </div>
          ))}
        </div>
      </section>
      <div className="back-to-main">
        <Link to={"/"}>
          <button className='back-btn'>Back to Subscription Page</button>
        </Link>
      </div>
    </div>
    
  );
}

export default Teas;
