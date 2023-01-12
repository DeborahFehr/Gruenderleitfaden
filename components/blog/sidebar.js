function Sidebar(props) {

    const { title, link, description, image, category } = props

    return (
        <>
            <section class="box">
                <a href="#" class="image featured"><img src="images/pic09.jpg" alt="" /></a>
                <header>
                    <h3>Sed etiam lorem nulla</h3>
                </header>
                <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit  adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>
                <footer>
                    <a href="#" class="button alt">Magna sed taciti</a>
                </footer>
            </section>
            <section class="box">
                <header>
                    <h3>Feugiat consequat</h3>
                </header>
                <p>Veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat sed lorem consequat feugiat lorem dolore.</p>
                <ul class="divided">
                    <li><a href="#">Sed et blandit consequat sed</a></li>
                    <li><a href="#">Hendrerit tortor vitae sapien dolore</a></li>
                    <li><a href="#">Sapien id suscipit magna sed felis</a></li>
                    <li><a href="#">Aptent taciti sociosqu ad litora</a></li>
                </ul>
                <footer>
                    <a href="#" class="button alt">Ipsum consequat</a>
                </footer>
            </section>
        </>
    );
}

export default Sidebar;