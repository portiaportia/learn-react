import "../css/Slideshow.css";

const Slideshow = () => {
    const importAll = (resource) => {
        return resource.keys().map(resource);
    };

    const images = importAll(
        require.context("../images/slideshow", false, /\.(png|jpe?g|svg$|webp)/)
    );

    return(
        <section id="slideshow">
            <img src={images[0]} />
            <a className="arrow" id="right-arrow" href="#">&gt;</a>
            <a className="arrow" id="left-arrow" href="#">&lt;</a>
        </section>
    );
}

export default Slideshow;
    