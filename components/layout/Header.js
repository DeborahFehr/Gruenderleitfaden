import Image from 'next/image'
import Link from 'next/link'
import Banner from './Banner'
import Intro from './Intro'
//import Logo from '/public/logo.png'

export default function Header(props) {

    return (
        <section id="header">
            <h1><Link href="/">Gründerleitfaden</Link></h1>
            <nav id="nav">
                <ul>
                    <li><Link href="/">Startseite</Link></li>
                    {/* className="current" */}
                    <li><Link href="/wissen">Wissensdatenbank</Link></li>
                    <li><Link href="/quiz">Entscheidungshilfen</Link></li>
                </ul>
            </nav>
            {props.landing && <>
                <Banner />
                <Intro />
            </>}
        </section>
    )
}