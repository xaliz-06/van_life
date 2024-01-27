import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Vans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} alt="van_img" />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <button className={`van-type ${van.type} selected`}>{van.type}</button>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore Our Van Options</h1>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};

export default Vans;
