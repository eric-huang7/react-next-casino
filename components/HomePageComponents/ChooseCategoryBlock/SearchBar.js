import styles from "../../../styles/HomePage/ChooseCategoryBlock.module.scss";
import axios from "axios";
import {
  allProvidersURL,
  chosenProviderURL,
  jackpotGames_url,
  newGames_url,
  search_chosenProviderGames_url,
  search_jackpotGames_url,
  search_newGames_url,
  search_tableGames_url,
  search_topGames_url,
  searchGames_url,
  tableGames_url,
  topGames_url
} from "../../../helpers/gamesURL";
import {useDispatch, useSelector} from "react-redux";
import {setSearchGames} from "../../../redux/actions/games";
import {useRef} from "react";
import {showSearchModal} from "../../../redux/actions/showPopups";
import {useRouter} from "next/router";


export const SearchBar = ({t, searchRef}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const searchButtonClickHandler = async (e) => {
    // console.log(router.query.id, "chose category")
    // dispatch(showSearchModal(true));
    // console.log(e.target.value)
    // console.log(searchRef.current.value)
    // console.log(e.keyCode)
    if (e.keyCode === 13 && searchRef.current.value) {
      searchRef.current.blur();

      let res;
      if (router.query.id === 'all-games' || !router.query.id) {
        res = await axios.get(searchGames_url(searchRef.current.value));
      } else if (router.query.id === 'new-games') {
        res = await axios.get(search_newGames_url(searchRef.current.value));
      } else if (router.query.id === 'btc-games') {
        res = await axios.get(search_topGames_url(searchRef.current.value));
      } else if (router.query.id === 'top-games') {
        res = await axios.get(search_topGames_url(searchRef.current.value));
      } else if (router.query.id === 'jackpot-games') {
        res = await axios.get(search_jackpotGames_url(searchRef.current.value));
      } else if (router.query.id === 'table-games') {
        res = await axios.get(search_tableGames_url(searchRef.current.value));
      } else {
        res = await axios.get(search_chosenProviderGames_url(router.query.id, searchRef.current.value));
      }
      dispatch(setSearchGames(res.data.results));
    }
    if (!searchRef.current.value || searchRef.current.value.trim() === '') {
      // console.log('empty')
      dispatch(setSearchGames([]));
    }
  }


  return (
    <label className={styles.searchInputLabel}>
      {/*<button onClick={() => searchButtonClickHandler()} type={"button"} className={styles.searchInput}>*/}
      {/*  <span>*/}
      {/*    {t("homePage.searchBar")}*/}
      {/*  </span>*/}
      {/*</button>*/}
      <input
        ref={searchRef}
        type={'text'}
        onKeyUp={(e) => searchButtonClickHandler(e)}
        placeholder={t("homePage.searchBar")}
        className={styles.searchInput}
      />
    </label>
  )
}