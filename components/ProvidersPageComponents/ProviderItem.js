import styles from '../../styles/ProvidersPage/ProvidersContainer.module.scss';
import Link from "next/link";


export const ProviderItem = ({t, providerData, providerClickHandler}) => {

  return (
        <div onClick={() => providerClickHandler(providerData)} className={styles.providerItemBlock}>
          <div className={styles.providerItem__ImageBlock}>
            <img src={`https://cimagehost1.sos-ch-gva-2.exoscale-cdn.com/images/${providerData.game_producer}.png`} alt={`${t('providersPage.providerItemIconDescription')} ${providerData.game_producer}`}/>
          </div>
          <div className={styles.providerItem__infoBlock}>
            <span>{`${providerData.games} ${t('providersPage.providerItem')}`}</span>
          </div>
        </div>
  )
}