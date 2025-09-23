import type { League } from '../api';

export const dropdownUnselectedValue = 'all';

export const filterLeaguesText =
  (textFilter: string) =>
    (league: League): boolean => {
      if (!textFilter) {
        return true;
      }
      return [league.strLeague,
        league.strSport,
        league.strLeagueAlternate].some((field) => field.toLowerCase().includes(textFilter.toLowerCase()));
    };

export const getUniqueSports = (leagues: League[]): string[] => Array.from(new Set(leagues.map((league) => league.strSport)));

export const filterSports =
  (sportFilter: string) =>
    (league: League): boolean => {
      if (!sportFilter || sportFilter === dropdownUnselectedValue){
        return true;
      }
      return league.strSport === sportFilter;
    };