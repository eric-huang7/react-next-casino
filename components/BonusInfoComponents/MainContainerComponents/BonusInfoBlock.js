import styles from "../../../styles/BonusInfoComponent/BonusInfoComponent.module.scss";


export const BonusInfoBlock = ({bonusData, userCurrency, t}) => {


    return (
        <ul className={styles.infoBlock}>
            <li className={styles.infoItem}>
                <p>{t("bonusInfoContainer.bonusInfo.maxBonus")}</p>
                <p>{bonusData.max_bonus}</p>
            </li>
            <li className={styles.infoItem}>
                <p>{t("bonusInfoContainer.bonusInfo.freeSpins")}</p>
                <p>{bonusData.free_spins}</p>
            </li>
            <li className={styles.infoItem}>
                <p>{t("bonusInfoContainer.bonusInfo.wageringRequirements")}</p>
                <p>{bonusData.wagering}</p>
            </li>

            {
                bonusData.max_bet === 0
                    ?
                    <>
                    </>
                    :
                    <li className={styles.infoItem}>
                        <p>{t("bonusInfoContainer.bonusInfo.maxBet")}</p>
                        <p>{bonusData.max_bet}</p>
                    </li>
            }
        </ul>
    )
}

