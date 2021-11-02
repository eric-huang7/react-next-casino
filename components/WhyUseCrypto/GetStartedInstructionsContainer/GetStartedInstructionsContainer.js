import styles from '../../../styles/WhyUsecrypto/GetStartedInstructionsContainer.module.scss'
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import {InstructionsIconsBlock} from "./InstructionsIconsBlock";
import {InstructionsTextContainer} from "./InstructionsTextContainer";

const data = {
  wallet: {
    heading: "whyUseCryptoPage.instructionsSection.iconsHeadings.wallet",
    icon : '/assets/img/whyUseCrypto/itemsIcons/wallet.svg',
    itemClass: 'walletItem',
    textInfo: "whyUseCryptoPage.instructionsSection.textBlocks.blockOne"
  },
  bitcoin: {
    heading: "whyUseCryptoPage.instructionsSection.iconsHeadings.bitcoin",
    icon : '/assets/img/whyUseCrypto/itemsIcons/bitcoin.svg',
    itemClass: 'bitcoinItem',
    textInfo: "whyUseCryptoPage.instructionsSection.textBlocks.blockTwo"
  },
  spending: {
    heading: "whyUseCryptoPage.instructionsSection.iconsHeadings.spending",
    icon : '/assets/img/whyUseCrypto/itemsIcons/spending.svg',
    itemClass: 'spendingItem',
    textInfo: "whyUseCryptoPage.instructionsSection.textBlocks.blockThree"
  }
}

export const GetStartedInstructionsContainer = ({t}) => {
  const {height, width} = useWindowDimensions();


  return (
    <div className={styles.instructionsMainWrapper}>
      {width >= 1350 ? <InstructionsIconsBlock data={data} t={t}/> : ''}


      <InstructionsTextContainer t={t} data={data}/>
    </div>
  )
}