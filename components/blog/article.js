function Article(props) {

    const { title, description, image, descHtml } = props

    return (
        <article class="box post">
            <a href="#" class="image featured"><img src="/images/pic07.jpg" alt="" /></a>
            <header>
                <h2>{title}</h2>
                <p>{description}</p>
            </header>
            <div dangerouslySetInnerHTML={{ __html: descHtml }}></div>
        </article>
    );
}

export default Article;