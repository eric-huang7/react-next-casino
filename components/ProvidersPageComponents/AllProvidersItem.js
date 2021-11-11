import styles from '../../styles/ProvidersPage/ProvidersContainer.module.scss';

export const AllProvidersItem = ({t, providerData, countOfGames, allGamesClickHandler}) => {

  return (
    <div onClick={() => allGamesClickHandler()} className={styles.providerItemBlock}>
      <div className={styles.allProviderItem__heading}>
        <span>all providers</span>
      </div>
      <div className={styles.providerItem__infoBlock}>
        <span>{`${countOfGames} ${'games'}`}</span>
      </div>
    </div>
  )
}