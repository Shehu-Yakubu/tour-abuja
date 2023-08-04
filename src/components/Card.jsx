const Card = (props) => {
    return (
        <div className="card">
            <img 
                src={new URL(`../assets/images/${props.data.placeImg}`, import.meta.url).href} 
                className="card--image"
            />
            <h3>{props.data.title}</h3>
            <div className="card--stats">
                <span>{props.data.stars.rating}</span>
                <span>
                    <img 
                        src={new URL(`../assets/images/${props.data.stars.starImg}`, import.meta.url).href}
                        className="star"/>
                </span>
                <span>({props.data.stars.reviewCount}K)</span>
            </div>
            <p>{props.data.description}</p>
        </div>
    )
}

export default Card