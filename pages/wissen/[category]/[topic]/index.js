import Article from "../../../../components/blog/article";
import Sidebar from "../../../../components/blog/sidebar";

import path from 'path';
import { promises as fs } from 'fs';
import { readFileSync } from "fs";

function Topic(props) {

    const { entry, categories, html } = props

    return (
        <div className="row">
            <div className="col-8 col-12-medium">
                <Article
                    title={entry.title}
                    description={entry.description}
                    image={entry.image}
                    descHtml={html} />
            </div>
            <div className="col-4 col-12-medium">
                <Sidebar categories={categories} />
            </div>
        </div>
    );
}

export default Topic;

export async function getStaticPaths() {

    const jsonDirectory = path.join(process.cwd(), 'content');
    const jsonData = await fs.readFile(jsonDirectory + '/articles.json', 'utf8');
    const data = JSON.parse(jsonData);

    const paths = Array.from(data.articles).map((entry) => {
        return {
            params: {
                category: entry.category,
                topic: entry.url
            }
        }
    })

    return {
        paths: paths,
        fallback: false,
    }
}


export async function getStaticProps({ params }) {

    const jsonDirectory = path.join(process.cwd(), 'content');
    let jsonData = await fs.readFile(jsonDirectory + '/articles.json', 'utf8');
    let data = JSON.parse(jsonData);

    let entry = data.articles.filter(function (item) { return item.url == params.topic; });

    let categories = data.articles.filter(function (item) { return item.category == params.category; });

    categories = categories.filter(function (item) { return item.url != params.topic; });

    const descHtml = readFileSync(jsonDirectory + "/articles/" + params.topic + ".html", 'utf8')

    return {
        props: {
            entry: entry[0],
            categories: categories,
            html: descHtml
        },
    }
}