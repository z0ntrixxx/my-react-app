import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { Card } from '../../component/Card/Card';
import { Form } from '../../component/Form/Form';
import { Header } from '../../component/Header/Header';

interface Artist {
  id: number;
  name: string;
  instrument: string;
  description: string;
  avatar: string;
}

const CARDLIMIT = 10;

export function CardsPage() {
  const [isOpen, setIsOpen] = useState(false)
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const card_limit = parseInt(searchParams.get('card_limit') || String(CARDLIMIT));

  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    import('../../component/CardList/Cardlist.json')
      .then((data) => {
        const allArtists: Artist[] = data.default || data;

        const shuffled = [...allArtists]
          .sort(() => 0.5 - Math.random())
          .slice(0, card_limit);

        setArtists(shuffled);
      })
      .catch((err) => {
        console.error('Ошибка загрузки JSON:', err);
      });
  }, [card_limit]);

  return (
    <div className="cards__page__container">
      <Header openForm={() => setIsOpen(true)} />

      <div className="edit__cards">
        {artists.length > 0 ? (
          artists.map((artist) => (
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
      <Form isOpen={isOpen} onClose={() => setIsOpen(false)} />

    </div>
  );
}