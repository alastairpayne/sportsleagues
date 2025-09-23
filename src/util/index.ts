import type { League } from '../api';

export const dropdownUnselectedValue = 'all';

export const filterLeaguesText = (leagues: League[], textFilter: string): League[] => {
  if (!textFilter) {
    return leagues;
  }
  return leagues.filter(league => 
    [league.strLeague,
      league.strSport,
      league.strLeagueAlternate].some( field => 
      field.toLocaleLowerCase().includes(textFilter.toLocaleLowerCase())));
};

export const getUniqueSports = (leagues: League[]): string[] => Array.from(new Set(leagues.map((league) => league.strSport)));

export const filterSports = (leagues: League[], sportFilter:string): League[] => {
  if (!sportFilter || sportFilter === dropdownUnselectedValue){
    return leagues;
  }
  return leagues.filter(league => league.strSport === sportFilter);
};