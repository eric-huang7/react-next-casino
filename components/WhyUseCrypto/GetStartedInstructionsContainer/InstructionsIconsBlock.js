import styles from '../../../styles/WhyUsecrypto/GetStartedInstructionsContainer.module.scss';
import {InstructionsIconItem} from "./InstructionsIconItem";

const data = {
  wallet: {
    heading: "1. PICK YOUR WALLET",
    icon : '/assets/img/whyUseCrypto/itemsIcons/wallet.svg',
    itemClass: 'walletItem',
  },
  bitcoin: {
    heading: "2. GET YOUR BITCOINS",
    icon : '/assets/img/whyUseCrypto/itemsIcons/bitcoin.svg',
    itemClass: 'bitcoinItem',
  },
  spending: {
    heading: "3. GET SPENDING",
    icon : '/assets/img/whyUseCrypto/itemsIcons/spending.svg',
    itemClass: 'spendingItem',
  }
}

export const InstructionsIconsBlock = ({t}) => {


  return (
    <div  className={styles.instructionsIconsWrapper}>
      <InstructionsIconItem t={t} data={data.wallet}/>
      <InstructionsIconItem t={t} data={data.bitcoin}/>
      <InstructionsIconItem t={t} data={data.spending}/>
    </div>
  )
}