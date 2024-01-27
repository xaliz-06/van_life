import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const HostVanDetail = () => {
  const [currVan, setCurrVan] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrVan(data.vans));
  }, [id]);

  if (!currVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <Link
        to=".."
        relative="path"
        className="back-button"
        style={{ textAlign: 'left' }}
      >
        &larr;<span>Back to all Vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currVan.imageUrl} alt="van_img" />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currVan.type}`}>
              {currVan.type}
            </i>
            <h3>{currVan.name}</h3>
            <h4>${currVan.price}/day</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostVanDetail;
