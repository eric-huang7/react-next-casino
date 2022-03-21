import styles from "../../../../styles/RegisterSignup.module.scss";
import {useTranslation} from "next-i18next";

export const TopHeading = () => {
    const {t} = useTranslation('common');

    return (
        <div className={styles.registerHeading}>
            <h2>{t('registrationForm.mainHeading')}</h2>
        </div>
    )
}