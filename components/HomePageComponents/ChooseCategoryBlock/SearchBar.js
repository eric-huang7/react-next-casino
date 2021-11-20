import styles from "../../../styles/HomePage/ChooseCategoryBlock.module.scss";
import axios from "axios";
import {searchGames_url} from "../../../helpers/gamesURL";
import {useDispatch, useSelector} from "react-redux";
import {setSearchGames} from "../../../redux/actions/games";
import {useRef} from "react";


export const SearchBar = ({t}) => {
  const dispatch = useDispatch();
  const searchBar = useRef('')
  let store = useSelector((store) => store.games.searchGames);

  const searchBarInputHandler = async (e) => {
    let res = await axios.get(searchGames_url(searchBar.current.value));

    console.log(e.target.value);
    console.log(res.data.results, '<+++++++++++ search!!');
    dispatch(setSearchGames(res.data.results));
    if (searchBar.current.value === '') {
      dispatch(setSearchGames([]));

    }
  }
  console.log( store, '<===== search store!!');
  return (
    <label className={styles.searchInputLabel}>
      <input ref={searchBar} onInput={(e) => searchBarInputHandler(e)} placeholder={t("homePage.searchBar")} className={styles.searchInput}/>
    </label>
  )
}