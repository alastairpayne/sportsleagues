import { useState, useEffect } from 'react';
import './App.css';

import { getAllLeagues, getSeasonBadge } from './api';
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

  const [images,
    setImages] = useState<Record<string, string>>({});

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

  const handleLeagueClick = async (id: string) => {
    try {
      const {
        seasons 
      } = await getSeasonBadge(id);
      //TODO - could pull out the season as alt text as well
      setImages((prev) => ({
        ...prev,
        [id]: seasons[0].strBadge 
      }));
    } catch (err) {
      console.error(err);
    }
  };

  const uniqueSports = getUniqueSports(leaguesFromAPI);

  const leaguesToDisplay = leaguesFromAPI
    .filter(filterSports(sportDropdownValue))
    .filter(filterLeaguesText(searchTerm));

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
          {...league}
          imageUrl={images[league.idLeague]}
          onClick={() => handleLeagueClick(league.idLeague)}/>)}
      </main>
    </>
  );
}

export default App;
