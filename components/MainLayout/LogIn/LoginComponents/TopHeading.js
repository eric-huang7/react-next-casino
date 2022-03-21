import styles from "../../../../styles/LogIn.module.scss";
import {useTranslation} from "next-i18next";

export const TopHeading = () => {
    const {t} = useTranslation('common');

    return (
        <div className={styles.logInHeading}>
            <h2>{t('loginForm.mainHeading')}</h2>
        </div>
    )
}