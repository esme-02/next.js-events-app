import Link from "next/link"
 
export const HomePage = ({data}) => {
    return (
        <div className="home_body">
            {data.map((ev) => (
            <Link legacyBehavior key={ev.id} href={`/events/${ev.id}`} passHref>
                <a className="card"> 
                    <div className="image">
                        <img alt={ev.title} src={ev.image} />
                    </div>
                    <div className="content">
                        <h2>{ev.title} </h2> 
                        <p> {ev.description} </p>
                    </div>
                </a>
            </Link>
            ))}
        </div>
    )
}