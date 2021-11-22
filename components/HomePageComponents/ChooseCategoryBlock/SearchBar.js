import styles from "../../../styles/HomePage/ChooseCategoryBlock.module.scss";
import axios from "axios";
import {searchGames_url} from "../../../helpers/gamesURL";
import {useDispatch, useSelector} from "react-redux";
import {setSearchGames} from "../../../redux/actions/games";
import {useRef} from "react";
import {showSearchModal} from "../../../redux/actions/showPopups";


export const SearchBar = ({t}) => {
  const dispatch = useDispatch();

  const searchButtonClickHandler = () => {
    dispatch(showSearchModal(true));
  }


  return (
    <label className={styles.searchInputLabel}>
      <button onClick={() => searchButtonClickHandler()} type={"button"} className={styles.searchInput}>
        <span>
          {t("homePage.searchBar")}
        </span>
      </button>
    </label>
  )
}