import { useState, useEffect } from 'react';
import './App.css';

import { getAllLeagues } from './api';
import { LeagueItem } from './components/LeagueItem';

function App() {

  const [loading,
    setLoading] = useState(true);
  const [leaguesToDisplay,
    setLeaguesToDisplay] = useState([]);

  useEffect(
    () => {
      const fetchAllLeagues = async () => {
        try {
          const {
            leagues 
          } = await getAllLeagues();
          console.log(leagues);
          setLeaguesToDisplay(leagues);
        }
        catch (err) {
          console.error(err);
        }
        finally {
          setLoading(false);
        }
      };
      fetchAllLeagues();
    },
    []
  );


  if (loading) return <p>Loading...</p>;

  return (
    <>
      {leaguesToDisplay.map((league) => <LeagueItem key={league.idLeague}
        {...league} />)}
    </>
  );
}

export default App;
