import styles from '../../styles/ProvidersPage/ProvidersContainer.module.scss';
import {ProviderItem} from "./ProviderItem";
import {AllProvidersItem} from "./AllProvidersItem";

// key={`${index} ${el.game_producer}`}
export const ProvidersContainer = ({t, providersData}) => {
  let providers = providersData.map((el, index) => {
    return (
      <ProviderItem key={`${index} ${el.game_producer}`} t={t} providerData={el}/>
    )
  })

  return (
      <div className={styles.providersMainContainer}>
        <h2 className={styles.providersMainHeading}>Providers</h2>
        <div className={styles.providersItemsContainer}>
          <AllProvidersItem t={t} providerData={'asd'}/>
          {providers}
        </div>
      </div>
  )
}