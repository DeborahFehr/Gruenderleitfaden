import ArticleCards from "../../components/blog/article-cards";
import content from "../../content/categories.json";

function Knowledge(props) {

    const { title, link, description, image, category } = props

    return (
        <ArticleCards 
            title={"Wissensdatenbank"}
            subtitle={"Lerne alles über die rechtliche Seite der Gründung"}
            description={"Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore."}
            overviewtitle={"Hier sind unsere Kategorien"}
            sections={content.categories}
            download={false}/>
    );
}

export default Knowledge;