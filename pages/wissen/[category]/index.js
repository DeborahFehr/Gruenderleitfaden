import ArticleCards from "../../../components/blog/article-cards";

const quizzes = [{ title: "Dolore nisl feugiat", link: "/wissen/firmenform/gmbh", description: "Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.", image: "/images/pic07.jpg" },]


function Overview(props) {

    const { title, link, description, image, category } = props
    
        return (
            <ArticleCards 
            title={"Firmenform"}
            subtitle={"Was ist das und wieso ist das wichtig?"}
            description={"Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore."}
            overviewtitle={"Hier geht es zu den einzelnen Firmenformen"}
            sections={quizzes}
            link={"/wissen/firmenform/downloads"}
            download={true}/>
        );
    }
    
    export default Overview;