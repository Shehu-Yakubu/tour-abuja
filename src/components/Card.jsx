const Card = (props) => {
    return (
        <div className="card">
            <img src={`../assets/images/${props.ds.placeImg}`} />
            <h3>{props.ds.title}</h3>
            <div className="card--stats">
                <span>{props.ds.stars.rating}</span>
                <span>{props.ds.stars.starImg}</span>
                <span>{props.ds.stars.reviewCount}</span>
            </div>
            <p>{props.ds.description}</p>
        </div>
    )
}

export default Card