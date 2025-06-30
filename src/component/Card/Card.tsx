interface CardProps {
    id: number;
    title: string;
    body: string;
}

export function Card({ id, title, body }: CardProps) {
    return (
        <a className={`creator__item creator__item-${id}`} href="#">
            <h3 className="creator__name">{title}</h3>
            <p className="creator__description-card">{body}</p>
        </a>
    );
}