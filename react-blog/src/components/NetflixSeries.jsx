const NetflixSeries = () => {
  const name = "Queen of Tears";
  const summary = "A gripping tale of love, loss, and resilience set against the backdrop of a war-torn nation.";
  let age = 19;
  // 3. let canWatch = "Not Available";
  // 3. if(age > 18) canWatch = "Watch Now";
  const returnGenre = () => {
    const genre = "RomCom";
    return genre;
  }
  const canWatch = () => {
    if (age > 18) return "Watch Now";
    return "Not Available"
  }
return (
        <div>
        <img src="/images/qot.jpg" alt="qot" className='movie-img'></img>
        <h2>Name : {name} </h2>
        <h3>Rating:{12/2+2.2}</h3>
        <p>{summary}</p>
        <p>Genre : {returnGenre()} </p>
        {/* 2. <button className="btn"> {age > 18 ? "Watch Now" : "Not Available"} </button> */}
        {/* 3. <button className="btn"> {canWatch} </button> */}
        <button className="btn" > {canWatch()} </button>
        </div>
  );
}

export default NetflixSeries;

export const Header = () => {
    return <p>This is Header Component of NetflixSeries.</p>
}

export const Footer = () => {
    return <p>copyright brjanedra0523@gmail.com</p>
}