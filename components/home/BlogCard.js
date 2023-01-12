function BlogCard(props) {

const { title, link, description, image, category } = props

    return (
        <section className="box">
            <div>
            <a href={link} className="image featured"><img src={image} alt="" /></a>
            <header>
                <h3>{title}</h3>
                <p>{category}</p>
            </header>
            <p>{description}</p>
            </div>
            <footer>
                <ul className="actions">
                    <li><a href={link} className="button icon solid fa-lightbulb">Mehr Erfahren</a></li>
                    <li><a href={link} className="button alt icon solid fa-file">Unterlagen</a></li> 
                </ul>
            </footer>
        </section>
    );
}

export default BlogCard;