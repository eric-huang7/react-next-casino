import {useTranslation} from "next-i18next";
import styles from "../../../../styles/RegisterSignup.module.scss";

export const BonusCodeInput = ({showBonusInput, activeBonus, bonusCodeData, setBonusCodedata}) => {
    const {t} = useTranslation('common');

    return (
        <div className={`${styles.iHaveBonus} ${activeBonus || !!bonusCodeData ? styles.showBonusInput : ''}`}>
            <p onClick={() => showBonusInput()}>{t('registrationForm.iHaveBonusHeading')}</p>
            {bonusCodeData ? <label className={styles.labelForBonusInput}
                                    htmlFor="bonusIn">{t('registrationForm.bonusCodeInput')}</label> : <></>}
            <input
                onChange={(e) => setBonusCodedata(e.target.value)}
                value={bonusCodeData}
                className={styles.bonusInput}
                id={'bonusIn'}
                type="text"
                placeholder={t('registrationForm.bonusCodeInput')}/>
        </div>
    )
}