import styles from '../../styles/ProvidersPage/ProvidersContainer.module.scss';

export const AllProvidersItem = ({t, providerData}) => {

  return (
    <div className={styles.providerItemBlock}>
      <div className={styles.allProviderItem__heading}>
        <span>all providers</span>
      </div>
      <div className={styles.providerItem__infoBlock}>
        <span>{`${providerData.games} ${'games'}`}</span>
      </div>
    </div>
  )
}