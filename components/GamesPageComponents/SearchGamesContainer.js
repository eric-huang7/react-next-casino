import {useSelector} from "react-redux";
import {GamesContainer} from "./GamesContainer";

export const SearchGamesContainer = ({searchGames, heading}) => {
  const searchQuery = useSelector((store) => store.games.isSearch);

  return <GamesContainer heading={heading} gamesData={searchGames} searchQuery={searchQuery}/>
}
