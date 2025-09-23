const parseJSON = async <T>(url: string): Promise<T> => {
	const res = await fetch(url);

	if (!res.ok){
		throw new Error(`Failed to fetch ${url} ${res.status}`);
	}

	return res.json() as Promise<T>;
}

type League = {
	idLeague: number,
	strLeague: string,
	strSport: string,
	strLeagueAlternative: string
}

export const getAllLeagues = () => {
	return parseJSON<League[]>('https://www.thesportsdb.com/api/v1/json/3/all_leagues.php');
}