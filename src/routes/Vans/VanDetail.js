import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

const VanDetail = () => {
  const vanId = useParams().id;
  const location = useLocation();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${vanId}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [vanId]);

  const search = location.state?.search || '';
  const type = location.state?.type || 'all';

  return (
    <div className="van-detail-container">
      <Link
        to={`..${search}`}
        relative="path"
        className="back-button"
        style={{ textAlign: 'left' }}
      >
        &larr;<span>Back to {type} Vans</span>
      </Link>
      {van ? (
        <div className="van-detail">
          <div className="van-hero">
            <img src={van.imageUrl} alt="van_img" />
            <div className="van-info">
              <h2>{van.name}</h2>
              <p>{van.description}</p>
              <button className={`van-type ${van.type} selected`}>
                {van.type}
              </button>
            </div>
          </div>

          <button className="link-button">Rent This Van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default VanDetail;
