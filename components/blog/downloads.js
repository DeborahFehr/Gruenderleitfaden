function DownloadList(props) {

    const { title, link, description, image, category } = props

    return (
        <ul className="dates">
            <li>
                {/* <span className="date">Jan <strong>27</strong></span> */}
                <h3><a href="#">Lorem dolor sit amet veroeros</a></h3>
                <p>Ipsum dolor sit amet veroeros consequat blandit ipsum phasellus lorem consequat etiam.</p>
            </li>
            <li>
                {/* <span className="date">Jan <strong>23</strong></span> */}
                <h3><a href="#">Ipsum sed blandit nisl consequat</a></h3>
                <p>Blandit phasellus lorem ipsum dolor tempor sapien tortor hendrerit adipiscing feugiat lorem.</p>
            </li>
        </ul>
    );
}

export default DownloadList;