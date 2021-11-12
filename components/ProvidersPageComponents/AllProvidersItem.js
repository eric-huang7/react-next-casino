import styles from '../../styles/ProvidersPage/ProvidersContainer.module.scss';

export const AllProvidersItem = ({t, providerData, countOfGames, allGamesClickHandler, locale}) => {

  return (
    <div onClick={() => allGamesClickHandler()} className={styles.providerItemBlock}>
      <div className={`${styles.allProviderItem__heading} ${styles[locale]}`}>
        <span>{t('providersPage.allProviders')}</span>
      </div>
      <div className={styles.providerItem__infoBlock}>
        <span>{`${countOfGames} ${t('providersPage.providerItem')}`}</span>
      </div>
    </div>
  )
}