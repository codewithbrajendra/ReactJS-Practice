//import "./Netflix.css"

export const SeriesCard = ({ data }) => {
    console.log(data);
    const { id, img_url, name, rating, description, cast, genre, watch_url } = data;
    const btn_style = {
        padding: "1.2rem 2.4rem",
        border: "none",
        fontSize: "1.6rem",
        backgroundColor: "var( --btn-hover-bg-color)",
        color: "var(--btn-color)"
 };
    return (
        <li className="card">
            <div>
                <img src={img_url} alt={name}  width="40%" height="40%" ></img>
            </div>
            <div className="card-content">
                <h2>Name : {name} </h2>
                <h3>Rating: {rating}</h3>
                <p>Summary: {description}</p>
                <p>Cast : {cast}</p>
                <p>Genre : {genre} </p>
                <a href={watch_url} target="_blank">
                    <button style={btn_style}>Watch Now</button>
                </a>
            </div>
        </li>
        )
}