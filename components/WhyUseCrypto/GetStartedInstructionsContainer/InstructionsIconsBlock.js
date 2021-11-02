import styles from '../../../styles/WhyUsecrypto/GetStartedInstructionsContainer.module.scss';
import {InstructionsIconItem} from "./InstructionsIconItem";



export const InstructionsIconsBlock = ({t, data}) => {


  return (
    <div  className={styles.instructionsIconsWrapper}>
      <InstructionsIconItem t={t} data={data.wallet}/>
      <InstructionsIconItem t={t} data={data.bitcoin}/>
      <InstructionsIconItem t={t} data={data.spending}/>
      <div  className={styles.redArea}></div>
    </div>
  )
}