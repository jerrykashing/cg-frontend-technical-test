import React from 'react';
import LoadingCard from '../LoadingCard';
import useData from './useData';
import './style.scss';

export default function VehicleList() {
  // eslint-disable-next-line no-unused-vars
  const [loading, error, vehicles] = useData();

  if (loading) {
    return (
      <div className="loadingBox" data-testid="loading">
        {
          [...Array(4).keys()].map((index) => (
            <div key={`loading-card-${index}`}>
              <LoadingCard />
            </div>
          ))
        }
      </div>
    );
  }

  if (error) {
    return <div data-testid="error">{ error }</div>;
  }

  return (
    <div
      className="vehicle-list"
      data-testid="results"
    >
      <ul>
        {
          vehicles.map((vehicle) => {
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
          })
        }
      </ul>
    </div>
  );
}
