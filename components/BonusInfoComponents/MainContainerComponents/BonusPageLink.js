import Link from "next/link";

import styles from "../../../styles/BonusInfoComponent/BonusInfoComponent.module.scss";


export const BonusPageLink = ({t}) => {


  return (
    <div className={styles.bonusPageLinkWrapper}>
      <Link href={'/termsAndConditions'}><a >{t("bonusInfoContainer.bonusTermsConditionsLink")}</a></Link>
    </div>
  )
}