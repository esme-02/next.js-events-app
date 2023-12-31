import React, {useRef, useState} from "react";
import { useRouter } from "next/router";


const SingleEvent = ({data}) => {
    const inputEmail = useRef();
    const router = useRouter();
    const [message, setMessage] = useState("")

    const onSubmit = async(e) => {
        e.preventDefault();
        const emailValue = inputEmail.current.value;
        const eventId = router?.query.id;

        const validRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(!emailValue.match(validRegex)) {
            setMessage("Please introduce a correct email adress");
        }

        try {
            const response = await fetch("/api/email-registration", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email: emailValue, eventId })
            });

            if (!response.ok) throw new Error(`Error: ${response.status}`);
            const data = await response.json();
            setMessage(data.message);
            inputEmail.current.value="";
        } catch (e) {
            console.log("ERROR", e);
        }
    };


    return (
        <div className="single_event_page">
            <h1>{data.title}</h1>
            <img src={data.image} alt={data.title} />
            <p>{data.description}</p>

            <form on onSubmit={onSubmit} className="email_resgistration">
                <label> Get Registered for this event!</label>
                <input ref={inputEmail} type="email" id="email" placeholder="Please Insert Your Email"/>
                <button type="submit">Submit</button>
            </form>
            <p>{message}</p>
        </div>
    )
}

export default SingleEvent;