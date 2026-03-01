export const SeriesCard = (props) => {
    console.log(props);
    return (
        <li key={props}>
            <div>
                <img src={props.currElem.img_url} alt={props.currElem.name} className='movie-img'></img>
            </div>
            <h2>Name : {props.currElem.name} </h2>
            <h3>Rating:{props.currElem.rating}</h3>
            <p>Summary: {props.currElem.description}</p>
            <p>Genre : {props.currElem.genre} </p>
            <a href={props.currElem.watch_url} target="_blank">
                <button className="btn">Watch Now</button>
            </a>
        </li>
        )
}