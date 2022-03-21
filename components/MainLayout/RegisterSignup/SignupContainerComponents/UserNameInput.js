import {useTranslation} from "next-i18next";
import styles from "../../../../styles/RegisterSignup.module.scss";

export const UserNameInput = ({setUsernameData, register, errors}) => {
    const {t} = useTranslation('common');

    return (
        <>
            <label htmlFor={'usernameIn'}>
                {t('registrationForm.usernameInput')}
            </label>
            <input
                onChange={(e) => setUsernameData(e.target.value)}
                {...register("username")}
                id={'usernameIn'}
                type="text"
            />
            <span className={styles.errorMessage}>{t(errors.username?.message)}</span>
        </>
    )
}