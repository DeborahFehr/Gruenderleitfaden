import ArticleCards from "../../components/blog/article-cards";

const categories = [{ title: "Firmenform", link: "/wissen/firmenform", description: "Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.", image: "/images/pic07.jpg" },]


function Knowledge(props) {

    const { title, link, description, image, category } = props

    return (
        <ArticleCards 
            title={"Wissensdatenbank"}
            subtitle={"Lerne alles über die rechtliche Seite der Gründung"}
            description={"Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore."}
            overviewtitle={"Hier sind unsere Kategorien"}
            sections={categories}
            download={false}/>
    );
}

export default Knowledge;