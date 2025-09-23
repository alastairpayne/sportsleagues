import type { League } from '../api';

export const filterLeaguesText = (leagues: League[], textFilter: string) => {
  if (!textFilter) {
    return leagues;
  }
  return leagues.filter(league => 
    [league.strLeague,
      league.strSport,
      league.strLeagueAlternate].some( field => 
      field.toLocaleLowerCase().includes(textFilter.toLocaleLowerCase())));
};