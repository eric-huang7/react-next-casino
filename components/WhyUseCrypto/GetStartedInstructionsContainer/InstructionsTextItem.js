import styles from '../../../styles/WhyUsecrypto/InstructionsTextContainer.module.scss';
import {InstructionsIconItem} from "./InstructionsIconItem";
import useWindowDimensions from "../../../hooks/useWindowDimensions";



export const InstructionsTextItem = ({t, data}) => {
  const {height, width} = useWindowDimensions();

  return (
    <div className={styles.textItemWrapper}>
      {width < 1350 ? <InstructionsIconItem t={t} data={data}/> : ''}


      <div className={styles.textBlock}>
        <p>
          {t(data.textInfo)}
        </p>
      </div>
    </div>
  )
}