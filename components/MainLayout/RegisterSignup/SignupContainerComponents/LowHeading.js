import styles from "../../../../styles/RegisterSignup.module.scss";
import {useTranslation} from "next-i18next";

export const LowHeading = ({registerCloseButtonHandler}) => {
    const {t} = useTranslation('common');

    return (
        <div className={styles.registerInnerBlockHead}>
            <h3>{t('registrationForm.innerHeading')}</h3>
            <div onClick={() => registerCloseButtonHandler()} className={styles.registerInnerCloseButton}>
                <span className={styles.closeOne}></span>
                <span className={styles.closeTwo}></span>
            </div>
        </div>
    )
}