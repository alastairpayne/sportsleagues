const parseJSON = async <T>(url: string): Promise<T> => {
  if (!cache[url]) {
    const res = await fetch(url);

    if (!res.ok){
      throw new Error(`Failed to fetch ${url} ${res.status}`);
    }

    cache[url] = res.json();
  }
  return cache[url] as Promise<T>;
};

export type League = {
	idLeague: string,
	strLeague: string,
	strSport: string,
	strLeagueAlternate: string
}

const endpoints = {
  allLeagues: 'https://www.thesportsdb.com/api/v1/json/3/all_leagues.php',
};

const cache : {
	[url: string] : unknown
} = {};

export const getAllLeagues = () => {
  return parseJSON<League[]>(endpoints.allLeagues);
};