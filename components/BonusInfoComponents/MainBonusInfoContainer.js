import styles from "../../styles/BonusInfoComponent/BonusInfoComponent.module.scss";
import {Heading} from "./MainContainerComponents/Heading";
import {BonusInfoBlock} from "./MainContainerComponents/BonusInfoBlock";
import {BonusAdditionalInfo} from "./MainContainerComponents/BonusAdditionalInfo";
import {BonusPageLink} from "./MainContainerComponents/BonusPageLink";



export const MainBonusInfoContainer = ({closeButtonClickHandler}) => {


  return (
    <div className={styles.mainBonusContainer}>

      <Heading
          closeButtonClickHandler={closeButtonClickHandler}
      />
      <BonusInfoBlock />
      <BonusAdditionalInfo />
      <BonusPageLink />

    </div>
  )
}