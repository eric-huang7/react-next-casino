import styles from '../../../styles/WhyUsecrypto/GetStartedInstructionsContainer.module.scss'
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import {InstructionsIconsBlock} from "./InstructionsIconsBlock";

export const GetStartedInstructionsContainer = ({t}) => {
  const {height, width} = useWindowDimensions();


  return (
    <div className={styles.instructionsMainWrapper}>
      <InstructionsIconsBlock t={t}/>
    </div>
  )
}