import React from 'react';
import './style.scss';

export default function VehicleCard({ vehicle }) {
  // show image for mobile as default
  const { name, url: imageUrl } = vehicle.media[1];
  return (
    <li
      key={`vehicle-${vehicle.id}`}
      className="vehicle"
    >
      <picture>
        <source media="(max-width: 480px)" srcSet={vehicle.media[1].url} />
        <source media="(min-width: 481px)" srcSet={vehicle.media[0].url} />
        <img
          alt={name}
          className="vehicle__image"
          src={imageUrl}
        />
      </picture>
      <div className="vehicle__info">
        <h5>{name}</h5>
        <div className="vehicle__price">{`From ${vehicle.price}`}</div>
        <div className="vehicle__description">{vehicle.description}</div>
      </div>
    </li>
  );
}
