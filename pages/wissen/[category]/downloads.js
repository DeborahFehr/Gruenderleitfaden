import DownloadList from "../../../components/blog/downloads";

function Downloads(props) {

    const { title, link, description, image, category } = props

    return (
        <article class="box post">
            <a href="#" class="image featured"><img src="images/pic01.jpg" alt="" /></a>
            <header>
                <h2>Unterlagen</h2>
                <p>Erhalte Dokumente zu deinem Thema</p>
            </header>
            <DownloadList />
        </article>
    );
}

export default Downloads;