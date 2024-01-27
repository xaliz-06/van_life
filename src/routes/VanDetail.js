import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const VanDetail = () => {
  const vanId = useParams().id;
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${vanId}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [vanId]);

  return (
    <div className="van-detail-container">
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
