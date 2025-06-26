import { useState, useEffect } from 'react';
import { Card } from '../Card/Card';

interface CardProps {
  id: number;
  title: string;
  body: string;
}

export function CardList() {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setCards(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Загрузка карточек...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <div className="creator__list">
      {cards.map(card => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          body={card.body}
        />
      ))}
    </div>
  );
}