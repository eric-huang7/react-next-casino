import styles from "../../../../styles/RegisterSignup.module.scss";
import {useTranslation} from "next-i18next";

export const EmailInput = ({setUserEmailData, register, errors}) => {
    const {t} = useTranslation('common');

    return (
        <>
            <label htmlFor={'emailIn'}>{t('registrationForm.emailInput')}</label>
            <input
                onChange={(e) => setUserEmailData(e.target.value)}
                {...register("email")}
                id={'emailIn'}
                type="text"
            />
            <span className={styles.errorMessage}>{t(errors.email?.message)}</span>
        </>
    )
}