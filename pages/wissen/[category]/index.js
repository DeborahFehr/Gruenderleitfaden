import ArticleCards from "../../../components/blog/article-cards";

import path from 'path';
import { promises as fs } from 'fs';

function Overview(props) {

    const { entry, articles } = props
    
        return (
            <ArticleCards 
            title={entry.title}
            subtitle={entry.subtitle}
            description={entry.content}
            overviewtitle={entry.overviewtitle}
            sections={articles}
            link={entry.downloadurl}
            download={entry.download}/>
        );
    }
    
    export default Overview;

    export async function getStaticPaths() {

        const jsonDirectory = path.join(process.cwd(), 'content');
        const jsonData = await fs.readFile(jsonDirectory + '/categories.json', 'utf8');
        const data = JSON.parse(jsonData);
      
        const paths = Array.from(data.categories).map((entry) => {
            return {
                params: {
                    category: entry.url
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
        let jsonData = await fs.readFile(jsonDirectory + '/categories.json', 'utf8');
        let data = JSON.parse(jsonData);
      
        let entry = data.categories.filter(function(item) { return item.url == params.category; });

        jsonData = await fs.readFile(jsonDirectory + '/articles.json', 'utf8');
        data = JSON.parse(jsonData);
      
        let articles = data.articles.filter(function(item) { return item.category == params.category; });
            
        return {
            props: {
                entry: entry[0],
                articles: articles
            },
        }
      }