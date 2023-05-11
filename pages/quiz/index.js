import ArticleCards from "../../components/blog/article-cards";
import content from "../../content/quizzes.json";

function Quizzes(props) {

    const { title, link, description, image, category } = props

    return (
        <ArticleCards 
        title={"Entscheidungshilfen"}
        subtitle={"Unsere Quizze helfen dir"}
        description={"Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore."}
        overviewtitle={"Hier sind unsere Quizze"}
        sections={content.quizzes}
        download={false}
        />
    );
}

export default Quizzes;