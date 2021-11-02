import styles from '../../../styles/WhyUsecrypto/InstructionsTextContainer.module.scss';
import {InstructionsTextItem} from "./InstructionsTextItem";


export const InstructionsTextContainer = ({t, data}) => {

  return (
    <div className={styles.textContainerWrapper}>
      <div  className={styles.textContainerInnerBlock}>
        <InstructionsTextItem data={data.wallet} t={t}/>
        <InstructionsTextItem data={data.bitcoin} t={t}/>
        <InstructionsTextItem data={data.spending} t={t}/>
      </div>
    </div>
  )
}