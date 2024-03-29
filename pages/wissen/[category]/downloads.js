import DownloadList from "../../../components/blog/downloads";

function Downloads(props) {

    const { title, link, description, image, category } = props

    return (
        <article className="box post">
            <a href="#" className="image featured"><img src={image} alt="" /></a>
            <header>
                <h2>Unterlagen</h2>
                <p>Erhalte Dokumente zu deinem Thema</p>
            </header>
            <DownloadList />
        </article>
    );
}

export default Downloads;