import React from "react";
import Link from "next/link";

const CatEvent = ({data, pageName}) => {
    return (
        <div className="cat_events">
            <h1>Events in {pageName} </h1>
            <div className="content">
                {data.map((ev) => {
                    return (
                        <Link legacyBehavior key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
                            <a className="card">
                                <img alt={ev.title} src={ev.image} /><h2> {ev.title} </h2><p> {ev.description} </p>
                            </a>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default CatEvent;