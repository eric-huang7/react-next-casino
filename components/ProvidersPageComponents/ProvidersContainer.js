import styles from '../../styles/ProvidersPage/ProvidersContainer.module.scss';
import {ProviderItem} from "./ProviderItem";
import {AllProvidersItem} from "./AllProvidersItem";
import {useRouter} from "next/router";
import {useEffect} from "react";

export const ProvidersContainer = ({t, providersData}) => {
  const router = useRouter()
  console.log(router, 'router')
  let countOfGames = 0;
  providersData.map((el) => {
    countOfGames += Number(el.games);
  })

  const allGamesClickHandler = () => {
    router.push({
      pathname: '/games-page/[id]',
      query: {id: "all-games", start_index: 0, quantity: 100}
    } ,`/games-page/all-games`, {locale: router.locale})
  }

  const providerClickHandler = (provider) => {
    if (typeof window !== 'undefined') {
      router.push({
        pathname: `/games-page/${provider.game_producer}/`,
        query: {id: provider.game_producer},
      })
    }
    // {
    //         pathname: `/games-page/${provider.game_producer}`,
    //         query: {pid: provider.game_producer, id: provider.game_producer}
    //       }
    // `/providers-page/${provider.game_producer}`
  }

  let providers = providersData.map((el, index) => {
    return (
      <ProviderItem providerClickHandler={providerClickHandler} key={`${index} ${el.game_producer}`} t={t} providerData={el}/>
    )
  })

  return (
      <div className={styles.providersMainContainer}>
        <h2 className={styles.providersMainHeading}>Providers</h2>
        <div className={styles.providersItemsContainer}>
          <AllProvidersItem allGamesClickHandler={allGamesClickHandler} t={t} providerData={'asd'} countOfGames={countOfGames}/>
          {providers}
        </div>
      </div>
  )
}