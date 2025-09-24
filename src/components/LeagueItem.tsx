import React from 'react';

//TODO - move each component into a folder if it'll have multiple files
import './LeagueItem.css';

type LeagueItemProps = {
	idLeague: string,
	strLeague: string,
	strSport: string,
	strLeagueAlternate: string,
	imageUrl?: string,
	onClick: () => void,
};

export const LeagueItem: React.FC<LeagueItemProps> = ({
  idLeague,
  strLeague, 
  strSport,
  strLeagueAlternate,
  onClick,
  imageUrl,
}) => {
  return (
    <div className="league-item"
    	onClick={onClick}>
      <h2>{strLeague}</h2>
      <p>{strSport}</p>	
      <p>{strLeagueAlternate}</p>
      <p>{imageUrl && <img src={imageUrl} />}</p>
    </div>
  );
};