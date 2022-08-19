import {useTranslation} from 'next-i18next'
import {useRouter} from 'next/router'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {MainBlock} from '../../components/HomePageComponents/MainBlock'
import MainLayout from '../../components/MainLayout/MainLayout'
import {ChooseCategoryBlock} from '../../components/HomePageComponents/ChooseCategoryBlock/ChooseCategoryBlock'
import {useEffect, useRef, useState} from 'react'
import {getCurrency} from '../../redux/currency/action'
import {useDispatch, useSelector} from 'react-redux'
import {GamesContainer} from '../../components/GamesPageComponents/GamesContainer'
import {
  allProvidersURL,
  chosenProviderURL,
  game_category_ids,
  game_ids,
  game_provider_category_ids,
  game_provider_ids,
  jackpotGames_url,
  newGames_url,
  tableGames_url, topGames_url
} from '../../helpers/gamesURL'
import {setGames, setLoaded, setSearch, setTotalRows} from '../../redux/games/action'
import ErrorEmpty from '../../components/ErrorBoundaryComponents/ErrorEmpty'
import Connect from "../../helpers/connect";
import {MoreButton} from "../../components/GamesPageComponents/MoreButton";
import { SearchGamesContainer } from '../../components/GamesPageComponents/SearchGamesContainer'

const GamesPage = (props) => {
  const dispatch = useDispatch()
  const {t} = useTranslation('common')
  const router = useRouter()
  const {id} = router.query
  const myRef = useRef(null)

  // const searchRef = useRef('')

  useEffect(() => {
    dispatch(getCurrency())
  }, [])

  useEffect(() => {
    myRef.current.scrollIntoView()
  }, [id])

  const [isShowMoreButton, setIsShowMoreButton] = useState(true)
  const [pageCounter, setPageCounter] = useState(0)
  const [heading, setHeading] = useState('all-games')
  const [gamesError, setGamesError] = useState('')

  const totalRows = useSelector((store) => store.games.totalRows)
  const allGames = useSelector((store) => store.games.allGames)
  const searchGames = useSelector((store) => store.games.searchGames)
  const isLoaded = useSelector((store) => store.games.isLoaded)
  const isSearch = useSelector((store) => store.games.isSearch)


  useEffect(() => {
    let heading = props.query.id
    let url
    let whatSearch
    setPageCounter(1)
    // searchRef?.current?.value = ''
    dispatch(setLoaded(false));
    dispatch(setSearch(false));

    setGamesError('')

    const quantity = 100;
    switch (props.query.id) {
      case 'all-games':
        url = allProvidersURL(quantity)
        break
      case 'new-games':
        url = newGames_url(quantity)
        break
      case 'btc-games':
        url = topGames_url(quantity)
        break
      case 'top-games':
        url = topGames_url(quantity)
        break
      case 'jackpot-games':
        url = jackpotGames_url(quantity)
        break
      case 'table-games':
        url = tableGames_url(quantity)
        break
      case 'tournaments':
        whatSearch = JSON.parse(props.query.tournamentData)

        if (whatSearch.game_category_ids && whatSearch.game_provider_ids) {
          let provider = whatSearch.game_provider_ids.split('|').filter((el) => el !== '').join(',')
          let categoryId = whatSearch.game_category_ids.split('|').filter((el) => el !== '').join(',')
          url = game_provider_category_ids(provider, categoryId)
        } else if (whatSearch.game_category_ids) {
          let categoryId = whatSearch.game_category_ids.split('|').filter((el) => el !== '').join(',')
          url = game_category_ids(categoryId)
        } else if (whatSearch.game_provider_ids) {
          let provider = whatSearch.game_provider_ids.split('|').filter((el) => el !== '').join(',')
          url = game_provider_ids(provider)
        } else {
          let gamesId = whatSearch.game_ids.split('|').filter((el) => el !== '').join(',')
          url = game_ids(gamesId)
        }
        break
      case 'bonus-games':
        heading = props.query.active_bonus
        url = topGames_url(100)
        break
      default:
        url = chosenProviderURL(props.query.id)
    }

    Connect.get(url, {}, (status, data) => {
      dispatch(setGames(data.results))
      dispatch(setTotalRows(data.total_rows))
    }).catch((err) => {
      setGamesError('gamesPage.error')
      dispatch(setLoaded(true));
    })
    setHeading(heading)
  }, [props?.query?.id])

  useEffect(() => {
    if (allGames.length === totalRows) {
      setIsShowMoreButton(false)
    } else {

    }
    return () => {
      setIsShowMoreButton(true)
    }
  }, [props.query, totalRows, allGames])

  return (
    <>
      <MainLayout t={t}>
        <MainBlock/>
        {/*<JackpotBlock />*/}
        {/*API for jackpots will add in future */}
        <div ref={myRef}></div>
        <ChooseCategoryBlock isProvidersPage={false} t={t}/>

        <ErrorEmpty>
          {isSearch ? (
            <SearchGamesContainer
              heading={heading}
              searchGames={searchGames}
              t={t}
            />
          ) : (
            <GamesContainer
              heading={heading}
              gamesData={allGames}
              setPageCounter={setPageCounter}
              t={t}
              gamesError={gamesError}
            />
          )}
        </ErrorEmpty>

        {isLoaded && !isSearch && <MoreButton
          heading={heading}
          gamesData={allGames}
          pageCounter={pageCounter}
          setPageCounter={setPageCounter}
          t={t}
        />}
      </MainLayout>
    </>
  )
}

export const getServerSideProps = async (context) => {

  return ({
    props: {
      ...await serverSideTranslations(context.locale, ['promotionsPage', 'common', 'newsData']),

      query: context.query,
    },
  })
}

export default GamesPage
