import React from 'react';
import LoadingCard from '../LoadingCard';
import VehicleCard from '../VehicleCard';
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
            return (
              <VehicleCard
                key={`vehicle-${vehicle.id}`}
                vehicle={vehicle}
              />
            );
          })
        }
      </ul>
    </div>
  );
}
