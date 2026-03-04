
// import './App.css'
import './index.css'
import './components/Netflix.css'

import NetflixSeries from "./components/NetflixSeries"
import { ProfileCard } from './components/ProfileCard';

export const App = () => {

return (
    <section className='container'>
        <h1 className='card-heading'>List of Best Netflix Series</h1>
      <NetflixSeries />
    </section>
);
    



};

