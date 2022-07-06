import React from 'react';
import { render } from '@testing-library/react';
import LoadingCard from '..';

describe('<LoadingCard /> Tests', () => {
  it('renders without crashing', () => {
    render(<LoadingCard />);
  });
});
