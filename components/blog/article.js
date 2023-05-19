function Article(props) {

    const { title, description, image, descHtml } = props

    return (
        <article className="box post">
            <a href="#" className="image featured artimage"><img src={image} alt="" /></a>
            <header>
                <h2>{title}</h2>
                <p>{description}</p>
            </header>
            <div dangerouslySetInnerHTML={{ __html: descHtml }}></div>
        </article>
    );
}

export default Article;