import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <section id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-6-medium col-12-small">
                        <section>
                            <header>
                                <h2>Rechtliches</h2>
                            </header>
                            <ul className="divided">
                                <li><a href="https://recode.law/impressum-2">Impressum</a></li>
                                <li><a href="https://recode.law/haftungsausschluss">Haftungsausschluss</a></li>
                                <li><a href="https://recode.law/privacy-statement-eu">Privacy Statement (EU)</a></li>
                            </ul>
                        </section>
                    </div>
                    <div className="col-4 col-6-medium col-12-small">
                        <section>
                            <header>
                                <h2>Über uns</h2>
                            </header>
                            <ul className="divided">
                                <li><a href="https://recode.law/unser-mitglieder">Team</a></li>
                                <li><a href="#">Entstehungsgeschichte</a></li>
                                <li><a href="https://recode.law/mitmachen">Mitmachen</a></li>
                            </ul>
                        </section>
                    </div>
                    <div className="col-4 col-12-medium">
                        <section>
                            <header>
                                <h2>Social Media</h2>
                            </header>
                            <ul className="social">

                                <li>
                                    <a className="icon brands fa-linkedin" href="https://de.linkedin.com/company/recodelaw">
                                        <span className="label">LinkedIn</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="icon brands fa-instagram" href="https://www.instagram.com/recode.law">
                                        <span className="label">Instagram</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="icon brands fa-twitter" href="https://twitter.com/recodelaw">
                                        <span className="label">Twitter</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="icon brands fa-youtube" href="https://www.youtube.com/channel/UCHDRGrYo6DJTGKOzq4924Gg">
                                        <span className="label">Youtube</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="icon brands fa-github" href="https://www.youtube.com/channel/UCHDRGrYo6DJTGKOzq4924Gg">
                                        <span className="label">Github</span>
                                    </a>
                                </li>
                            </ul>
                            <ul className="contact">
                                <li>
                                    <h3>Kontakt</h3>
                                    <p><a href="https://recode.law/">recode.law</a></p>
                                </li>
                                <li>
                                    <h3>Mail</h3>
                                    <p><a href="hi@recode.law">hi@recode.law</a></p>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div className="col-12">
                        <div id="copyright">
                            <ul className="links">
                                <li>&copy; Gründerleitfaden von recode.law. 2023.</li>
                                {/* <li>Design: <a href="http://html5up.net">HTML5 UP</a></li> */}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}