import {useState, useEffect} from 'react'
import {Card} from '../Card/Card'

interface CardProps {
    id: number;
    title: string;
    body: string;
}

export function CardList() {
const [cards, setCards] = useState<CardProps[]>([]);

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=4 ')
    .then(response => response.json())
    .then(data => setCards(data));
}, []);

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

