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
import {useEffect, useRef} from "react";

export const SearchBar = ({ t, onSearch, type }) => {
  const router = useRouter()
  const searchRef = useRef('')

  useEffect(() => {
    searchRef.current.value = '';
    onSearch('');
  },[router.query.id])

  const searchButtonClickHandler = async (event) => {
    onSearch(searchRef.current.value);
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
        return type;
    }
  }

  return (
    <label className={styles.searchInputLabel}>
      <input
        ref={searchRef}
        type={'text'}
        onKeyUp={searchButtonClickHandler}
        placeholder={t('homePage.searchBar') + ' ' + getTitle()}
        className={styles.searchInput}
      />
    </label>
  )
}
