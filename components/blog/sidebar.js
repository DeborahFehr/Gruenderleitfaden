function Sidebar(props) {

    const { categories } = props

    return (
        <>
            {/* <section className="box">
                <a href="#" className="image featured"><img src="/images/header.jpg" alt="" /></a>
                <header>
                    <h3>Sed etiam lorem nulla</h3>
                </header>
                <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit  adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>
                <footer>
                    <a href="#" className="button alt">Magna sed taciti</a>
                </footer>
            </section> */}
            <section className="box">
                <header>
                    <h3>Mehr zum Thema</h3>
                </header>
                <ul className="divided">
                    {categories.map(category =>
                        <li key={category.link}><a href={category.link}>{category.title}</a></li>)
                    }
                </ul>
                <footer>
                    <a href={"/wissen/" + categories[0].category} className="button alt">Zur Übersicht</a>
                </footer>
            </section>
        </>
    );
}

export default Sidebar;