import { useLocation } from "react-router"
import { useEffect, useState } from 'react'
import { Header } from "../../Header/Header"
import { Card } from "../../Card/Card"

interface CardProps {
    "id": number;
    "title": string;
    "body": string;
}

const CARDLIMIT = 10;

export function CardsPage() {
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const card_limit = searchParams.get('card_limit') || CARDLIMIT;
    const [cards, setCards] = useState<CardProps[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${card_limit}`)
      .then((response) => response.json())
      .then((data) => {
    console.log(data);
      setCards(data);
      }
       
    )}, []);

  return (
    <div className="cards__page__container">
      <Header/>
      <div className="edit__cards">
        {cards.map(card => (
          <Card
            id={card.id}
            title={card.title}
            body={card.body}
          />
        ))}
      </div>
    </div>
  )
}