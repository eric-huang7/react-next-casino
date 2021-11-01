import styles from '../../../styles/WhyUsecrypto/WhyUseBitcoinItemsContainer.module.scss';
import {WhyUseBitcoinItem} from "./WhyUseBitcoinItem";

import whyUseBitcoinData from './whyUsebitcoinData';


export const WhyUseBitcoinItemsContainer = ({t}) => {

  return(
    <div className={styles.whyUseBitcoinMainWrapper}>
      <div className={styles.whyUseBitcoinItemsContainer}>
        <WhyUseBitcoinItem classNeed={whyUseBitcoinData[0].className} itemHeading={whyUseBitcoinData[0].heading} itemTextInfo={whyUseBitcoinData[0].textInfo} itemIcon={whyUseBitcoinData[0].icon} t={t}/>
        <WhyUseBitcoinItem classNeed={whyUseBitcoinData[1].className} itemHeading={whyUseBitcoinData[1].heading} itemTextInfo={whyUseBitcoinData[1].textInfo} itemIcon={whyUseBitcoinData[1].icon} t={t}/>
        <WhyUseBitcoinItem classNeed={whyUseBitcoinData[2].className} itemHeading={whyUseBitcoinData[2].heading} itemTextInfo={whyUseBitcoinData[2].textInfo} itemIcon={whyUseBitcoinData[2].icon} t={t}/>
        <WhyUseBitcoinItem classNeed={whyUseBitcoinData[3].className} itemHeading={whyUseBitcoinData[3].heading} itemTextInfo={whyUseBitcoinData[3].textInfo} itemIcon={whyUseBitcoinData[3].icon} t={t}/>
        <WhyUseBitcoinItem classNeed={whyUseBitcoinData[4].className} itemHeading={whyUseBitcoinData[4].heading} itemTextInfo={whyUseBitcoinData[4].textInfo} itemIcon={whyUseBitcoinData[4].icon} t={t}/>
      </div>
    </div>
  )
}