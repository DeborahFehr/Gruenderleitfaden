import Article from "../../../../components/blog/article";
import Sidebar from "../../../../components/blog/sidebar";

function Topic(props) {

    const { title, link, description, image, category } = props

    return (
        <div class="row">
            <div class="col-8 col-12-medium">
                <Article />
            </div>
            <div class="col-4 col-12-medium">
                <Sidebar />
            </div>
        </div>
    );
}

export default Topic;