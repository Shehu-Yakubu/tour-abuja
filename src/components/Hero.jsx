import heroImg from "../assets/images/hero-img-1.jpg"

const Hero = () => {
    return (
        <div className="hero">
            <img src={heroImg} className="hero--img" />
            <h3 className="hero--title">Experience the beautiful nature of Abuja</h3>
            <p className="hero--text">Visit the city beautiful places for relxation and offerings.</p>
        </div>
    )
}

export default Hero