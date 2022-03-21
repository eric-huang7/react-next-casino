import styles from "../../../../styles/LogIn.module.scss";
import {useTranslation} from "next-i18next";

export const LowHeading = ({loginCloseButtonHandler}) => {
    const {t} = useTranslation('common');

    return (
        <div className={styles.logInInnerBlockHead}>
            <h3>{t('loginForm.innerHeading')}</h3>
            <div onClick={() => loginCloseButtonHandler()} className={styles.logInInnerCloseButton}>
                <span className={styles.closeOne}></span>
                <span className={styles.closeTwo}></span>
            </div>
        </div>
    )
}