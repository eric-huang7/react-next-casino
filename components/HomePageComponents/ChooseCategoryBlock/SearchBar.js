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
import { setSearchGames } from '../../../redux/games/action'
import { useRouter } from 'next/router'

export const SearchBar = ({ t, searchRef }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const searchButtonClickHandler = async (e) => {

    if (e.keyCode === 13 && searchRef.current.value) {
      searchRef.current.blur()

      let url
      try {
        if (router.query.id === 'all-games' || !router.query.id) {
          url = searchGames_url(searchRef.current.value)
        } else if (router.query.id === 'new-games') {
          url = search_newGames_url(searchRef.current.value)
        } else if (router.query.id === 'btc-games') {
          url = search_topGames_url(searchRef.current.value)
        } else if (router.query.id === 'top-games') {
          url = search_topGames_url(searchRef.current.value)
        } else if (router.query.id === 'jackpot-games') {
          url = search_jackpotGames_url(searchRef.current.value)
        } else if (router.query.id === 'table-games') {
          url = search_tableGames_url(searchRef.current.value)
        } else if (router.query.id === 'tournaments') {

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
          url = search_chosenProviderGames_url(router.query.id, searchRef.current.value)
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
    }
  }

  return (
    <label className={styles.searchInputLabel}>
      <input
        ref={searchRef}
        type={'text'}
        onKeyUp={(e) => searchButtonClickHandler(e)}
        placeholder={t('homePage.searchBar')}
        className={styles.searchInput}
      />
    </label>
  )
}
