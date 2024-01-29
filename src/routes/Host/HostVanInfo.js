import React from 'react';
import { useOutletContext } from 'react-router-dom';

const HostVanInfo = () => {
  const { currVan } = useOutletContext();

  return (
    <section className="host-van-detail-info">
      <h4>Name: {currVan.name}</h4>
      <h4>Category: {currVan.category}</h4>
      <h4>Description: {currVan.description}</h4>
      <h4>
        Visibility: <span>Public</span>
      </h4>
    </section>
  );
};

export default HostVanInfo;
