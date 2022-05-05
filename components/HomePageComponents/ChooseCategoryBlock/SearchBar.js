import styles from '../../../styles/HomePage/ChooseCategoryBlock.module.scss'
import Connect from "../../../helpers/connect";
import {
  game_category_ids_search,
  game_ids_search,
  game_provider_category_ids_search,
  game_provider_ids_search,
  search_chosenProviderGames_url,
  search_jackpotGames_url,
  search_newGames_url,
  search_tableGames_url,
  search_topGames_url,
  searchGames_url,
} from '../../../helpers/gamesURL'
import { useDispatch } from 'react-redux'
import {setLoaded, setSearch, setSearchGames} from '../../../redux/games/action'
import { useRouter } from 'next/router';
import {useEffect, useRef} from "react";
import {delay} from "../../../helpers/timer";

const minQueryLength = 2
const inputDelay = 500

export const SearchBar = ({ t }) => {
  const router = useRouter();
  const type = router.query.id;
  const dispatch = useDispatch()
  const searchRef = useRef('');

  useEffect(() => {
    searchRef.current.value = '';
    clearSearch();
  },[type])

  const searchButtonClickHandler = async (event) => {

    if (searchRef.current.value?.length >= minQueryLength) {
      dispatch(setSearch(true))
      dispatch(setLoaded(false))
      fetchSearch();
    } else {
      clearSearch();
    }
  }

  const clearSearch = () => {
    dispatch(setSearch(false))
    dispatch(setSearchGames([]))
  }

  const fetchSearch = async (e) => {
    if (searchRef.current.value) {
      // searchRef.current.blur()

      let url
      try {
        if (type === 'all-games' || !type) {
          url = searchGames_url(searchRef.current.value)
        } else if (type === 'new-games') {
          url = search_newGames_url(searchRef.current.value)
        } else if (type === 'btc-games') {
          url = search_topGames_url(searchRef.current.value)
        } else if (type === 'top-games') {
          url = search_topGames_url(searchRef.current.value)
        } else if (type === 'jackpot-games') {
          url = search_jackpotGames_url(searchRef.current.value)
        } else if (type === 'table-games') {
          url = search_tableGames_url(searchRef.current.value)
        } else if (type === 'tournaments') {

          let whatSearch = JSON.parse(router.query.tournamentData)
          if (whatSearch.game_category_ids && whatSearch.game_provider_ids) {
            let providers = whatSearch.game_provider_ids.split('|').filter((el) => el !== '').join(',')
            url = game_provider_category_ids_search(providers, whatSearch.game_category_ids, searchRef.current.value)

          } else if (whatSearch.game_category_ids) {
            url = game_category_ids_search(whatSearch.game_category_ids, searchRef.current.value)

          } else if (whatSearch.game_provider_ids) {
            let providers = whatSearch.game_provider_ids.split('|').filter((el) => el !== '').join(',')
            url = game_provider_ids_search(providers, searchRef.current.value)

          } else {
            url = game_ids_search(whatSearch.game_ids, searchRef.current.value)

          }

        } else {
          url = search_chosenProviderGames_url(type, searchRef.current.value)
        }

        Connect.get(url, {}, (status, data) => {
          dispatch(setSearchGames(data.results))
        })
      } catch (e) {
        dispatch(setSearchGames([]))
      }
    }
    if (!searchRef.current.value || searchRef.current.value.trim() === '') {
      dispatch(setSearchGames([]))
      clearSearch()
    }
  }

  const getTitle = () => {
    switch (type) {
      case 'all-games':
        return t('gamesPage.headings.allGames');
      case 'new-games':
        return t('gamesPage.headings.newGames');
      case 'btc-games':
        return t('gamesPage.headings.btcGames');
      case 'top-games':
        return t('gamesPage.headings.topGames');
      case 'jackpot-games':
        return t('gamesPage.headings.jackpotGames');
      case 'table-games':
        return t('gamesPage.headings.tableGames');
      case 'tournaments':
        return t('gamesPage.headings.tournaments');
      default:
        return type || '';
    }
  }

  return (
    <label className={styles.searchInputLabel}>
      <input
        ref={searchRef}
        type={'text'}
        onKeyUp={delay((e) => searchButtonClickHandler(e), inputDelay)}
        placeholder={t('homePage.searchBar') + ' ' + getTitle()}
        className={styles.searchInput}
      />
    </label>
  )
}
