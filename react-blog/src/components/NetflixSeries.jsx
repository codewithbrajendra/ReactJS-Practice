import seriesData from "../api/seriesData.json"

const NetflixSeries = () => {

return (
    <ul>
      {seriesData.map((currElem) => {
        return (
        <li key={currElem.id}>
            <div>
                <img src={currElem.img_url} alt={currElem.name} className='movie-img'></img>
            </div>
            <h2>Name : {currElem.name} </h2>
            <h3>Rating:{currElem.rating}</h3>
            <p>Summary: {currElem.description}</p>
            <p>Genre : {currElem.genre} </p>
            <a href={currElem.watch_url} target="_blank">
                <button className="btn">Watch Now</button>
            </a>
        </li>
        )
        }
      )}
    </ul>
  );
}

export default NetflixSeries;