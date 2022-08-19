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
import {useEffect, useState} from "react";
import {delay} from "../../../helpers/timer";
import SearchField from "../../form/SearchField";

const minQueryLength = 2
const inputDelay = 500

export const SearchBar = ({ t }) => {
  const router = useRouter();
  const type = router.query.id;
  const dispatch = useDispatch()
  const [query, setQuery] = useState('');

  useEffect(() => {
    setQuery('');
    clearSearch();
  },[type])

  const searchButtonClickHandler = async (event) => {
    const query = event.target.value;

    if (query?.length >= minQueryLength) {
      dispatch(setSearch(query))
      dispatch(setLoaded(false))
      fetchSearch(query);
    } else {
      clearSearch();
    }
  }

  const clearSearch = () => {
    dispatch(setSearch(false))
    dispatch(setSearchGames([]))
  }

  const fetchSearch = async (query) => {
    if (query) {
      let url
      try {
        if (type === 'all-games' || !type) {
          url = searchGames_url(query)
        } else if (type === 'new-games') {
          url = search_newGames_url(query)
        } else if (type === 'btc-games') {
          url = search_topGames_url(query)
        } else if (type === 'top-games') {
          url = search_topGames_url(query)
        } else if (type === 'jackpot-games') {
          url = search_jackpotGames_url(query)
        } else if (type === 'table-games') {
          url = search_tableGames_url(query)
        } else if (type === 'tournaments') {

          let whatSearch = JSON.parse(router.query.tournamentData)
          if (whatSearch.game_category_ids && whatSearch.game_provider_ids) {
            let providers = whatSearch.game_provider_ids.split('|').filter((el) => el !== '').join(',')
            url = game_provider_category_ids_search(providers, whatSearch.game_category_ids, query)

          } else if (whatSearch.game_category_ids) {
            url = game_category_ids_search(whatSearch.game_category_ids, query)

          } else if (whatSearch.game_provider_ids) {
            let providers = whatSearch.game_provider_ids.split('|').filter((el) => el !== '').join(',')
            url = game_provider_ids_search(providers, query)

          } else {
            url = game_ids_search(whatSearch.game_ids, query)

          }

        } else {
          url = search_chosenProviderGames_url(type, query)
        }

        Connect.get(url, {}, (status, data) => {
          dispatch(setSearchGames(data.results))
        })
      } catch (e) {
        dispatch(setSearchGames([]))
      }
    }
    if (!query || query?.trim() === '') {
      dispatch(setSearchGames([]))
      clearSearch()
    }
  }

  const getTitle = () => {
    switch (type) {
      case 'all-games' || undefined:
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
    <SearchField
      value={query}
      placeholder={t('homePage.searchBar') + ' ' + getTitle()}
      onKeyUp={delay((e) => searchButtonClickHandler(e), inputDelay)}
      onChange={(e) => setQuery(e.target.value)}
    />
  )
}
