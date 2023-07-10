import React from "react";
import Link from "next/link";

const AllEvents = ({data}) => {
    return (
        <div className="events_page">
            {data.map((ev) => (
                <Link legacyBehavior key={ev.id} href={`/events/${ev.id}`} passHref>
                    <a className="card">
                        <img src={ev.image} alt={ev.title} /><h2>{ev.title}</h2>
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default AllEvents;