function Sidebar(props) {

    const { categories } = props

    return (
        <>
            {/* <section class="box">
                <a href="#" class="image featured"><img src="/images/header.jpg" alt="" /></a>
                <header>
                    <h3>Sed etiam lorem nulla</h3>
                </header>
                <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit  adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>
                <footer>
                    <a href="#" class="button alt">Magna sed taciti</a>
                </footer>
            </section> */}
            <section class="box">
                <header>
                    <h3>Mehr zum Thema</h3>
                </header>
                <ul class="divided">
                    {categories.map(category =>
                        <li><a href="#">{category.title}</a></li>)
                    }
                </ul>
                <footer>
                    <a href="#" class="button alt">Zur Übersicht</a>
                </footer>
            </section>
        </>
    );
}

export default Sidebar;