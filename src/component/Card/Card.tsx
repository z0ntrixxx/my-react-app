import React from 'react';

interface Artist {
  id: number;
  name: string;
  instrument: string;
  description: string;
  avatar: string;
}

export const Card: React.FC<Artist> = ({ id, name, instrument, description, avatar }) => {
  return (
    <a className={`creator__item creator__item-${id}`} href="#">
      <div className="creator__user">
        <div className="card__icon">
          <img src={avatar} alt={name} />
        </div>
        <div className="creator__info">
          <h3 className="creator__name">{name}</h3>
          <p className="creator__role">{instrument}</p>
        </div>
      </div>
      <p className="creator__description-card">{description}</p>
    </a>
  );
};