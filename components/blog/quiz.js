function Quiz(props) {

    const { title, link, description, image, category } = props

    return (
        <article class="box post" style={{maxWidth: "750px", margin: "auto"}}>
            <a href="#" class="image featured"><img src="images/pic01.jpg" alt="" /></a>
            <header>
                <h2>Finde deine Rechtsform</h2>
                <p>Entscheidungshilfe zur Firmenform</p>
            </header>
                <p> Hier kommt mal ein Quiz hin... 
                    Nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
                    eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
                    elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                    sit amet nullam consequat feugiat dolore tempus.
                </p>
        </article>
    );
}

export default Quiz;