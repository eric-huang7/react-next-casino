import styles from "../../styles/SearchModalWindow/SearchModalWindow.module.scss";
import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setSearchGames} from "../../redux/games/action";
import {searchGames_url} from "../../helpers/gamesURL";
import {showSearchModal} from "../../redux/actions/showPopups";


export const SearchHeading = ({t, searchBar}) => {
  const dispatch = useDispatch();

  let store = useSelector((store) => store.games.searchGames);

  const searchBarInputHandler = async (e) => {
    // if (e.keyCode === 13) {
    //   searchBar.current.blur();
    //
    //   let res = await axios.get(searchGames_url(searchBar.current.value));
    //   dispatch(setSearchGames(res.data.results));
    //   if (searchBar.current.value === '') {
    //     dispatch(setSearchGames([]));
    //   }
    // }
  }
  const closeButtonClickHandler = () => {
    dispatch(showSearchModal(false));
    dispatch(setSearchGames([]));
  }


  return (
    <div className={styles.searchHeading}>
      <label className={styles.searchPopupInputLabel} htmlFor="searchGamesPopup">
        <input ref={searchBar} onKeyDown={(e) => searchBarInputHandler(e)} id={'searchGamesPopup'} className={styles.searchPopupInput} type="text" placeholder={t("homePage.searchBar")}/>
      </label>
      <button onClick={() => closeButtonClickHandler()} className={styles.closeButton}>
        <span className={styles.closeOne}></span>
        <span className={styles.closeTwo}></span>
      </button>
    </div>
  )
}
