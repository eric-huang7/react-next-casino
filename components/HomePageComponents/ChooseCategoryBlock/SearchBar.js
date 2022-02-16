import styles from "../../../styles/HomePage/ChooseCategoryBlock.module.scss";
import axios from "axios";
import {
  allProvidersURL,
  chosenProviderURL,
  game_category_ids,
  game_category_ids_search,
  game_ids,
  game_ids_search, game_provider_category_ids, game_provider_category_ids_search,
  game_provider_ids,
  game_provider_ids_search,
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
      } else if (router.query.id === 'tournaments') {

        let whatSearch = JSON.parse(router.query.tournamentData);
        if (whatSearch.game_category_ids && whatSearch.game_provider_ids) {
          let providers = whatSearch.game_provider_ids.split('|').filter((el) => el !== "").join(',');
          res = await axios.get(game_provider_category_ids_search(providers, whatSearch.game_category_ids, searchRef.current.value));

        } else if (whatSearch.game_category_ids) {
          res = await axios.get(game_category_ids_search(whatSearch.game_category_ids, searchRef.current.value));

        } else if (whatSearch.game_provider_ids) {
          let providers = whatSearch.game_provider_ids.split('|').filter((el) => el !== "").join(',');
          res = await axios.get(game_provider_ids_search(providers, searchRef.current.value));

        } else {
          res = await axios.get(game_ids_search(whatSearch.game_ids, searchRef.current.value))

        }

      } else {
        res = await axios.get(search_chosenProviderGames_url(router.query.id, searchRef.current.value));
      }
      dispatch(setSearchGames(res.data.results));
    }
    if (!searchRef.current.value || searchRef.current.value.trim() === '') {
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