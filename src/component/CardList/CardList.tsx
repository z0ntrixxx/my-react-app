import React, { useState, useEffect } from 'react';
import { Card } from '../Card/Card';

interface Artist {
  id: number;
  name: string;
  instrument: string;
  description: string;
  avatar: string;
}

export const CardList = (): React.ReactElement => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [randomArtists, setRandomArtists] = useState<Artist[]>([]);

  useEffect(() => {
    import('../CardList/Cardlist.json')
      .then((data) => {
        const artistsArray: Artist[] = data.default || data;
        const getRandomArtists = (arr: Artist[], n: number): Artist[] => {
          const shuffled = [...arr];
          for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
          }
          return shuffled.slice(0, n);
        };

        const randomFour = getRandomArtists(artistsArray, 4);
        setRandomArtists(randomFour);
        setArtists(artistsArray);
      })
      .catch((err) => {
        console.error('Ошибка загрузки JSON:', err);
      });
  }, []);

  return (
    <div className="creator__list">
      {randomArtists.length > 0 ? (
        randomArtists.map((artist) => (
          <Card
            key={artist.id}
            id={artist.id}
            name={artist.name}
            instrument={artist.instrument}
            description={artist.description}
            avatar={artist.avatar}
          />
        ))
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
};