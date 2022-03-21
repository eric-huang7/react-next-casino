import styles from "../../../../styles/RegisterSignup.module.scss";
import {useTranslation} from "next-i18next";

export const LoginButton = ({openLogin}) => {
    const {t} = useTranslation('common');

    return (
        <div className={styles.alredyRegistered}>
            <p className={styles.alredyText}>{t('registrationForm.alreadyRegistered')}</p>
            <p onClick={() => openLogin()} className={styles.LogInText}>{t('registrationForm.logInLink')}</p>
        </div>
    )
}