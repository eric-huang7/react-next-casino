import styles from "../../../../styles/LogIn.module.scss";
import {useTranslation} from "next-i18next";

export const ForgotPasswordButton = ({forgotPasswordClickHandler}) => {
    const {t} = useTranslation('common');
    return (
        <div className={styles.forgotPassword}>
            <button onClick={() => forgotPasswordClickHandler()}>{t('loginForm.forgotPassword')}</button>
        </div>
    )
}