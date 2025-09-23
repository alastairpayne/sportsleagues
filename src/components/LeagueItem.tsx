import React from 'react';

//TODO - move each component into a folder if it'll have multiple files
import './LeagueItem.css';

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
    <div className="league-item">
      <h2>{strLeague}</h2>
      <p>{strSport}</p>	
      <p>{strLeagueAlternate}</p>
    </div>
  );
};