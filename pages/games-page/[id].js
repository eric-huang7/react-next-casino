import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { MainBlock } from '../../components/HomePageComponents/MainBlock'
import MainLayout from '../../components/MainLayout/MainLayout'
import { ChooseCategoryBlock } from '../../components/HomePageComponents/ChooseCategoryBlock/ChooseCategoryBlock'
import { useEffect, useRef, useState } from 'react'
import { getCurrency } from '../../redux/currency/action'
import { useDispatch, useSelector } from 'react-redux'
import { GamesContainer } from '../../components/GamesPageComponents/GamesContainer'
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
import { setGames } from '../../redux/games/action'
import ErrorEmpty from '../../components/ErrorBoundaryComponents/ErrorEmpty'
import Connect from "../../helpers/connect";

const GamesPage = (props) => {
  const dispatch = useDispatch()
  const { t } = useTranslation('common')
  const router = useRouter()
  const { id } = router.query

  // const searchRef = useRef('')

  useEffect(() => {
    dispatch(getCurrency())
  }, [])

  const [isShowMoreButton, setIsShowMoreButton] = useState(true)
  const [requestGamesData, setRequestGamesData] = useState([])
  const [pageCounter, setPageCounter] = useState(0)
  const [total_rows, setTotal_rows] = useState(0)
  const [heading, setHeading] = useState('all-games')
  const [gamesError, setGamesError] = useState('')

  useEffect(() => {
    let res
    let heading = props.query.id
    let url
    let whatSearch
    setPageCounter(1)
    // searchRef?.current?.value = ''

    setGamesError('')

    switch (props.query.id) {
      case 'all-games':
        url = allProvidersURL(100)
        break
      case 'new-games':
        url = newGames_url(100)
        break
      case 'btc-games':
        url = topGames_url(100)
        break
      case 'top-games':
        url = topGames_url(100)
        break
      case 'jackpot-games':
        url = jackpotGames_url(100)
        break
      case 'table-games':
        url = tableGames_url(100)
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
      setRequestGamesData(data.results)
      setTotal_rows(data.total_rows)
    }).catch((err) => {
      setGamesError('gamesPage.error')
    })
    setHeading(heading)
  }, [props?.query?.id])

  const allGames = useSelector((store) => store.games)
  let searchGames = useSelector((store) => store.games.searchGames)

  useEffect(() => {
    if (requestGamesData.length === total_rows) {
      setIsShowMoreButton(false)
    } else {

    }
    return () => {
      setIsShowMoreButton(true)
    }
  }, [props.query, total_rows, requestGamesData])

  return (
    <>
      <MainLayout t={t}>
        <MainBlock/>
        {/*<JackpotBlock />*/}
        {/*API for jackpots will add in future */}
        <ChooseCategoryBlock isProvidersPage={false} t={t}/>

        <ErrorEmpty>
          <GamesContainer
            heading={heading}
            gamesData={requestGamesData}
            setRequestGamesData={setRequestGamesData}
            pageCounter={pageCounter}
            setPageCounter={setPageCounter}
            isShowMoreButton={isShowMoreButton}
            setIsShowMoreButton={setIsShowMoreButton}
            totalRows={total_rows}
            setTotal_rows={setTotal_rows}
            t={t}
            gamesError={gamesError}
          />
        </ErrorEmpty>
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
