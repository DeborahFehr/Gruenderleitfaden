import ArticleCards from "../../../components/blog/article-cards";
import data from "../../../content/categories.json";
import subdata from "../../../content/articles.json";
const quizzes = [{ title: "Dolore nisl feugiat", link: "/wissen/firmenform/gmbh", description: "Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.", image: "/images/pic07.jpg" },]


function Overview(props) {

    const { title, link, description, image, category } = props

    const content = data.categories[0];
    const articles = subdata.articles.filter(i => i.category == "Firmenform"); 
    
        return (
            <ArticleCards 
            title={content.title}
            subtitle={content.subtitle}
            description={content.content}
            overviewtitle={"Hier geht es zu den einzelnen Firmenformen"}
            sections={articles}
            link={content.downloadurl}
            download={content.download}/>
        );
    }
    
    export default Overview;