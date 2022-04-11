import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useDispatch, useSelector } from 'react-redux'
import MainLayout from '../../components/MainLayout/MainLayout'
import { useEffect, useRef, useState } from 'react'
import { getCurrency } from '../../redux/currency/action'
import { MainBlock } from '../../components/HomePageComponents/MainBlock'
import { ChooseCategoryBlock } from '../../components/HomePageComponents/ChooseCategoryBlock/ChooseCategoryBlock'
import { ProvidersContainer } from '../../components/ProvidersPageComponents/ProvidersContainer'
import { SearchGamesContainer } from '../../components/SearchGamesModalWindow/SearchGamesContainer'
import axios from 'axios'
import { serverUrl } from '../../envs/url'
import ErrorEmpty from '../../components/ErrorBoundaryComponents/ErrorEmpty'

const ProvidersPage = () => {
  const { t } = useTranslation('common')
  const dispatch = useDispatch()
  const searchRef = useRef('')
  let searchGames = useSelector((store) => store.games.searchGames)

  const [providersData, setProvidersData] = useState([])
  const [providersError, setProvidersError] = useState('')

  useEffect(() => {
    dispatch(getCurrency())
    axios.get(serverUrl + 'game_providers')
      .then((data) => {

        setProvidersData(data.data.results)
        setProvidersError('')
      })
      .catch((err) => {
        setProvidersError('providersPage.error')
      })
  }, [])

  return (
    <>
      <MainLayout t={t}>
        <MainBlock/>
        {/*<JackpotBlock />*/}
        {/*API for jackpots will add in futu
        re */}
        <ChooseCategoryBlock searchRef={searchRef} isProvidersPage={true} t={t}/>
        {
          searchGames.length >= 0 && searchRef.current.value ?
            <ErrorEmpty>
              <SearchGamesContainer t={t} searchGames={searchGames} searchBar={searchRef} heading={'all-games'}/>
            </ErrorEmpty>
            :
            <ErrorEmpty>
              <ProvidersContainer t={t} providersData={providersData} providersError={providersError}/>
            </ErrorEmpty>
        }
      </MainLayout>
    </>
  )
}

export const getServerSideProps = async (context) => {

  return ({
    props: {
      ...await serverSideTranslations(context.locale, ['promotionsPage', 'common', 'newsData']),
    },
  })
}

export default ProvidersPage
