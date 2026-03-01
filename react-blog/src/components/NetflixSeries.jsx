import seriesData from "../api/seriesData.json"
import { SeriesCard } from "./SeriesCard";

const NetflixSeries = () => {
return (
    <ul>
      {seriesData.map((currElem) => 
        <SeriesCard key={currElem.id} data={currElem} />
      )}
    </ul>
  );
}

export default NetflixSeries;