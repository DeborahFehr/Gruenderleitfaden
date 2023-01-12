import PortfolioCard from "../home/PortfolioCard";

function ArticleCards(props) {

    const { title, subtitle, description, overviewtitle, link, image, sections, download } = props

    return (
        <article class="box post">
            <a href="#" class="image featured"><img src="images/pic01.jpg" alt="" /></a>
            <header>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </header>
            <p> {description} </p>
            <section>
                <header>
                    <h3>{overviewtitle}</h3>
                </header>
                <div className="row">
                    {sections.map((entry, index) => (
                        <div className="col-3 col-12-small dflex">
                            <PortfolioCard key={index}
                                title={entry.title}
                                link={entry.link}
                                description={entry.description}
                                image={entry.image}
                                category={entry.category} />
                        </div>
                    ))}
                </div>
            </section>
            {download &&
                <section>
                    <header>
                        <h3>Hier geht es zu den Downloads!</h3>
                    </header>
                    <ul className="actions">
                        <li><a href={link} className="button alt icon solid fa-file">Unterlagen</a></li>
                    </ul>
                </section>
            }
        </article>
    );
}

export default ArticleCards;