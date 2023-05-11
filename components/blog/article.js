function Article(props) {

    const { title, link, description, image, descHtml } = props

    return (
        <article class="box post">
            <a href="#" class="image featured"><img src="images/pic01.jpg" alt="" /></a>
            <header>
                <h2>No Sidebar</h2>
                <p>Lorem ipsum dolor sit amet feugiat</p>
            </header>
            {/* <div dangerouslySetInnerHTML={{ __html: descHtml }}></div> */}
        </article>
    );
}

export default Article;