import styles from "../../../../styles/LogIn.module.scss";
import {useTranslation} from "next-i18next";

export const RegisterButton = ({openRegister}) => {
    const {t} = useTranslation('common');

    return (
        <div className={styles.notAlreadyRegistered}>
            <p className={styles.alredyText}>{t('loginForm.alreadyRegistered')}</p>
            <p onClick={() => openRegister()} className={styles.logInText}>{t('loginForm.registerLink')}</p>
        </div>
    )
}