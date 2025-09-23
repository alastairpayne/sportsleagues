import { useState, useEffect } from 'react';
import './App.css';

import { getAllLeagues } from './api';
import { LeagueItem } from './components/LeagueItem';
import { SearchBar } from './components/SearchBar';
import { filterLeaguesText } from './util';

function App() {

  const [loading,
    setLoading] = useState(true);
  const [leaguesFromAPI,
    setLeaguesFromAPI] = useState([]);

  const [searchTerm,
    setSearchTerm] = useState("");

  useEffect(
    () => {
      const fetchAllLeagues = async () => {
        try {
          const {
            leagues 
          } = await getAllLeagues();
          console.log(leagues);
          setLeaguesFromAPI(leagues);
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

  const leaguesToDisplay = filterLeaguesText(
    leaguesFromAPI,
    searchTerm
  );

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <nav>
        <SearchBar value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search leagues..." />
        <p>Results {leaguesToDisplay.length}</p>
      </nav>
      <main>
        {leaguesToDisplay.map((league) => <LeagueItem key={league.idLeague}
          {...league} />)}
      </main>
    </>
  );
}

export default App;
