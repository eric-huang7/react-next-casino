import Link from "next/link";

import styles from "../../../styles/BonusInfoComponent/BonusInfoComponent.module.scss";


export const BonusPageLink = () => {


  return (
    <div className={styles.bonusPageLinkWrapper}>
      <Link href={'/termsAndConditions'}><a >{'General Bonus Terms & Conditions'}</a></Link>
    </div>
  )
}