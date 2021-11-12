import styles from '../../styles/ProvidersPage/ProvidersContainer.module.scss';
import {ProviderItem} from "./ProviderItem";
import {AllProvidersItem} from "./AllProvidersItem";
import {useRouter} from "next/router";
import {useEffect} from "react";

export const ProvidersContainer = ({t, providersData}) => {
  const router = useRouter()
  // console.log(router, 'router')
  let countOfGames = 0;
  providersData.map((el) => {
    countOfGames += Number(el.games);
  })

  const allGamesClickHandler = () => {
    router.push({
      pathname: '/games-page/[id]',
      query: {id: "all-games"}
    })
  }

  const providerClickHandler = (provider) => {
      router.push({
        pathname: `/games-page/[id]/`,
        query: {id: provider.game_producer},
      })
  }

  let providers = providersData.map((el, index) => {
    return (
      <ProviderItem providerClickHandler={providerClickHandler} key={`${index} ${el.game_producer}`} t={t} providerData={el}/>
    )
  })

  return (
      <div className={styles.providersMainContainer}>
        <h2 className={styles.providersMainHeading}>{t('providersPage.heading')}</h2>
        <div className={styles.providersItemsContainer}>
          <AllProvidersItem locale={router.locale} allGamesClickHandler={allGamesClickHandler} t={t} providerData={'asd'} countOfGames={countOfGames}/>
          {providers}
        </div>
      </div>
  )
}