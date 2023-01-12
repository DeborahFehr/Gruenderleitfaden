import Header from './Header';
import Footer from './Footer';

function Layout(props) {
    return (
        <div id="page-wrapper">
            <Header landing={props.landing}/>
            <section id="main">
                <div className="container">{props.children}</div>
            </section>
            <Footer />
        </div>
    );
}

export default Layout;