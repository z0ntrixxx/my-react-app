interface CardProps {
    id: number;
    title: string;
    body: string;
}

export function Card ({id, title, body}: CardProps){
    return (
    <a className={`creator__item creator__item-${id}`} href="#">
        <h3 class="creator__name">{title}</h3>
        <p class="creator__description">{body}</p>
        </a>
       ) 
}