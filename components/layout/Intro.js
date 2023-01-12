import Link from 'next/link'

function Intro(props) {
    return (
        <section id="intro" className="container">
            <div className="row">
                <div className="col-4 col-12-medium">
                    <section className="first">
                        <i className="icon solid featured fa-gavel"></i>
                        <header>
                            <h2>Rechtliche Infos</h2>
                        </header>
                        <p>Erhalte aktuelle rechtliche Infos.</p>
                    </section>
                </div>
                <div className="col-4 col-12-medium">
                    <section className="middle">
                        <i className="icon solid featured alt fa-rocket"></i>
                        <header>
                            <h2>Wissensdatenbank</h2>
                        </header>
                        <p>Lerne alles, was du für die rechtlichen Aspekte deiner Gründung benötigst.</p>
                    </section>
                </div>
                <div className="col-4 col-12-medium">
                    <section className="last">
                        <i className="icon solid featured alt2 fa-bolt"></i>
                        <header>
                            <h2>Entscheidungshilfen</h2>
                        </header>
                        <p>Benutze unsere Entscheidungshilfen, um passende Angebote zu finden.</p>
                    </section>
                </div>
            </div>
            <footer>
                <ul className="actions">
                    <li><Link href="/wissen" className="button large">Zur Wissensdatenbank</Link></li>
                    <li><Link href="/quiz" className="button alt large">Zu den Entscheidungshilfen</Link></li>
                </ul>
            </footer>
        </section>
    );
}

export default Intro;