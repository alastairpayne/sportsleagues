import React from 'react';

type LeagueItemProps = {
	idLeague: string,
	strLeague: string,
	strSport: string,
	strLeagueAlternate: string
};

export const LeagueItem: React.FC<LeagueItemProps> = ({
  idLeague,
  strLeague, 
  strSport,
  strLeagueAlternate,
}) => {
  return (
    <div>
      <h2>{strLeague}</h2>
      <p>{strSport}</p>	
      <p>{strLeagueAlternate}</p>
    </div>
  );
};