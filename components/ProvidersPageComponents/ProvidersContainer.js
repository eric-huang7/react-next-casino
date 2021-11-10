import styles from '../../styles/ProvidersPage/ProvidersContainer.module.scss';
import {ProviderItem} from "./ProviderItem";
import {AllProvidersItem} from "./AllProvidersItem";
import {useRouter} from "next/router";
import {useEffect} from "react";

// key={`${index} ${el.game_producer}`}
export const ProvidersContainer = ({t, providersData}) => {
  const router = useRouter()

  let countOfGames = 0;
  providersData.map((el) => {
    countOfGames += Number(el.games);
  })


  const providerClickHandler = (provider) => {
    console.log(provider, 'click provider');
    if (typeof window !== 'undefined') {
      router.push({
        pathname: `/games-page/${provider.game_producer}`,
        query: {...router.query, pid: provider.game_producer}
      })
    }

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
          <AllProvidersItem t={t} providerData={'asd'} countOfGames={countOfGames}/>
          {providers}
        </div>
      </div>
  )
}