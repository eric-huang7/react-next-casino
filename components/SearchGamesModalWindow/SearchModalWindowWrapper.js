import styles from '../../styles/SearchModalWindow/SearchModalWindow.module.scss';
import {SearchHeading} from "./SearchHeading";
import {SearchGamesContainer} from "./SearchGamesContainer";
import {useSelector} from "react-redux";
import {useRef} from "react";



export const SearchModalWindowWrapper = ({t}) => {
  const searchBar = useRef('')

  let searchGames = useSelector((store) => store.games.searchGames);
  // console.log(searchGames, 'search games')

  return (
    <div className={styles.searchPopupWrapper}>
      <SearchHeading searchBar={searchBar} t={t}/>
      <SearchGamesContainer searchBar={searchBar} searchGames={searchGames} t={t}/>
    </div>
  )
}