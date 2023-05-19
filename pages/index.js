import Image from 'next/image'
import Layout from '../components/layout/Layout'
import BlogCard from '../components/home/BlogCard'
import PortfolioCard from '../components/home/PortfolioCard'

import path from 'path';
import { promises as fs } from 'fs';

export default function Home(props) {

  const { quizzes, categories } = props

  return (
    <div className="row">
      <div className="col-12">
        <section>
          <header className="major">
            <h2>Wissen</h2>
          </header>
          <div className="row">
            {categories.map((entry, index) => (
              <div className="col-6 col-12-small dflex">
                <BlogCard key={index}
                  title={entry.title}
                  link={entry.link}
                  description={entry.description}
                  image={entry.image}
                  category={entry.category}
                  download={entry.download} />
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* <div className="col-12">
        <section>
          <header className="major">
            <h2>Entscheidungshilfen</h2>
          </header>
          <div className="row">
            {quizzes.map((entry, index) => (
              <div className="col-4 col-6-medium col-12-small dflex">
                <PortfolioCard key={index}
                  title={entry.title}
                  link={entry.link}
                  description={entry.description}
                  image={entry.image} />
              </div>
            ))}
          </div>
        </section>
      </div> */}
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout landing={true}>{page}</Layout>
  )
}


export async function getStaticProps({ params }) {

  const jsonDirectory = path.join(process.cwd(), 'content');
  let jsonData = await fs.readFile(jsonDirectory + '/categories.json', 'utf8');
  let data = JSON.parse(jsonData);
  let categories = data.categories;

  jsonData = await fs.readFile(jsonDirectory + '/quizzes.json', 'utf8');
  data = JSON.parse(jsonData);
  let quizzes = data.quizzes;

  return {
    props: {
      quizzes: quizzes,
      categories: categories,
    },
  }
}