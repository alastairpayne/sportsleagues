import { useState, useEffect } from 'react';
import './App.css';

import { getAllLeagues } from './api';
import { LeagueItem } from './components/LeagueItem';
import { SearchBar } from './components/SearchBar';
import { Dropdown } from './components/Dropdown';
import { filterLeaguesText, dropdownUnselectedValue, getUniqueSports, filterSports } from './util';

function App() {

  const [loading,
    setLoading] = useState(true);
  const [leaguesFromAPI,
    setLeaguesFromAPI] = useState([]);

  const [searchTerm,
    setSearchTerm] = useState("");

  const [sportDropdownValue,
    setSportDropdownValue] = useState(dropdownUnselectedValue);


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

  const uniqueSports = getUniqueSports(leaguesFromAPI);

  // TODO if we had more than 2 of these, I'd rewrite them so they were compsosable
  const leaguesToDisplay = 
  filterLeaguesText(
    filterSports(
      leaguesFromAPI,
      sportDropdownValue
    ),
    searchTerm
  );

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <nav>
        <SearchBar value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search leagues..." />
        <Dropdown value={sportDropdownValue}
          onChange={setSportDropdownValue}
          options={uniqueSports} />
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
