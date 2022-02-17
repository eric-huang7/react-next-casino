import styles from '../../styles/ProvidersPage/ProvidersContainer.module.scss';
import Link from "next/link";
import {imagesUrl} from "../../envs/url";


export const ProviderItem = ({t, providerData, providerClickHandler}) => {

  return (
        <div onClick={() => providerClickHandler(providerData)} className={styles.providerItemBlock}>
          <div className={styles.providerItem__ImageBlock}>
            <img src={`${imagesUrl}images/${providerData.game_producer}.png`} alt={`${t('providersPage.providerItemIconDescription')} ${providerData.game_producer}`}/>
          </div>
          <div className={styles.providerItem__infoBlock}>
            <span>{`${providerData.games} ${t('providersPage.providerItem')}`}</span>
          </div>
        </div>
  )
}