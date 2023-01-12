function PortfolioCard(props) {

    const { title, link, description, image } = props

    return (
        <section className="box">
            <div>
            <a href={link} className="image featured"><img src={image} alt="" /></a>
            <header>
                <h3>{title}</h3>
            </header>
            <p>{description}</p>
            </div>
            <footer>
                <ul className="actions">
                    <li><a href={link} className="button alt">Los geht's</a></li>
                </ul>
            </footer>
        </section>
    );
}

export default PortfolioCard;