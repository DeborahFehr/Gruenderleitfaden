import Image from 'next/image'
import Layout from '../components/layout/Layout'
import BlogCard from '../components/home/BlogCard'
import PortfolioCard from '../components/home/PortfolioCard'

const blog = [{ title: "Dolore nisl feugiat", link: "wissen/test", description: "Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.", image: "/images/pic07.jpg", category: "Firmenform" },
{ title: "Aptent veroeros aliquam", link: "wissen/test", description: "Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. ", image: "/images/pic07.jpg", category: "Firmenform" }]

const portfolio = [{ title: "Dolore nisl feugiat", link: "wissen/test", description: "Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.", image: "/images/pic09.jpg" },
{ title: "Aptent veroeros aliquam", link: "wissen/test", description: "Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. ", image: "/images/pic09.jpg" }]

export default function Home() {
  return (
    <div className="row">
      <div className="col-12">
        <section>
          <header className="major">
            <h2>Wissen</h2>
          </header>
          <div className="row">
            {blog.map((entry, index) => (
              <div className="col-6 col-12-small dflex">
                <BlogCard key={index}
                  title={entry.title}
                  link={entry.link}
                  description={entry.description}
                  image={entry.image}
                  category={entry.category} />
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="col-12">
        <section>
          <header className="major">
            <h2>Entscheidungshilfen</h2>
          </header>
          <div className="row">
            {portfolio.map((entry, index) => (
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
      </div>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout landing={true}>{page}</Layout>
  )
}