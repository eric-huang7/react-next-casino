import styles from "../../../styles/BonusInfoComponent/BonusInfoComponent.module.scss";


export const BonusInfoBlock = ({bonusData, userCurrency}) => {


    return (
        <ul className={styles.infoBlock}>
            <li className={styles.infoItem}>
                <p>{'Max bonus'}</p>
                <p>{bonusData.max_bonus}</p>
            </li>
            <li className={styles.infoItem}>
                <p>{'Free spins'}</p>
                <p>{bonusData.free_spins}</p>
            </li>
            <li className={styles.infoItem}>
                <p>{'Wagering Requirements'}</p>
                <p>{bonusData.wagering}</p>
            </li>

            {
                bonusData.max_bet === 0
                    ?
                    <>
                    </>
                    :
                    <li className={styles.infoItem}>
                        <p>{'Max Bet per Game Round'}</p>
                        <p>{bonusData.max_bet}</p>
                    </li>
            }
        </ul>
    )
}

