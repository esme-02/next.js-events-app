import Link from "next/link"
import Image from "next/image"

export const Header = () => {
    return (
        <header>
            <div>
                <div className="topNav">
                    <Image alt="logo" src={"/images/black-logo.png"} width={50} height={50} /> 
                    <nav>
                        <ul>
                            <li>
                                <Link legacyBehavior href="/" passHref>
                                    <a>Home</a> 
                                </Link>
                            </li>
                            <li>
                                <Link legacyBehavior href="/events" passHref> 
                                    <a>Events</a> 
                                </Link>
                            </li>
                            <li>
                                <Link legacyBehavior href="/about-us" passHref> 
                                    <a>About Us</a> 
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <p className="title">Faucibus et molestie ac feugiat</p>
            </div>
      </header>
    )
}