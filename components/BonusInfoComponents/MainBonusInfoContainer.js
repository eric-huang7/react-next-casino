import styles from "../../styles/BonusInfoComponent/BonusInfoComponent.module.scss";
import {Heading} from "./MainContainerComponents/Heading";
import {BonusInfoBlock} from "./MainContainerComponents/BonusInfoBlock";
import {BonusAdditionalInfo} from "./MainContainerComponents/BonusAdditionalInfo";
import {BonusPageLink} from "./MainContainerComponents/BonusPageLink";



export const MainBonusInfoContainer = () => {


  return (
    <div className={styles.mainBonusContainer}>

      <Heading />
      <BonusInfoBlock />
      <BonusAdditionalInfo />
      <BonusPageLink />

    </div>
  )
}