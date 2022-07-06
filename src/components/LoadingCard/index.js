import React from 'react';
import './style.scss';

export default function LoadingCard() {
  return (
    <div className="loadingCard is-loading">
      <div className="loadingCard__image" />
      <div className="loadingCard__content">
        <div className="loadingCard__price" />
        <p />
      </div>
    </div>
  );
}
