import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import VehicleCard from '..';

const mockData = {
  id: 'xe',
  apiUrl: '/api/vehicle_xe.json',
  description: 'The most advanced, efficient and refined sports saloon that Jaguar has ever produced',
  price: '£30,000',
  media: [
    {
      name: 'vehicle',
      url: '/images/16x9/xe_k17.jpg'
    }
  ]
};

describe('<VehicleCard /> Tests', () => {
  it('renders without crashing', () => {
    render(<VehicleCard vehicle={mockData} />);
  });

  it('Should show vehicle name', () => {
    const { getByText } = render(<VehicleCard vehicle={mockData} />);
    expect(getByText(mockData.media[0].name)).toBeInTheDocument();
  });

  it('Should show vehicle price', () => {
    const { getByText } = render(<VehicleCard vehicle={mockData} />);
    expect(getByText(`From ${mockData.price}`)).toBeInTheDocument();
  });

  it('Should show vehicle description', () => {
    const { getByText } = render(<VehicleCard vehicle={mockData} />);
    expect(getByText(mockData.description)).toBeInTheDocument();
  });
});
