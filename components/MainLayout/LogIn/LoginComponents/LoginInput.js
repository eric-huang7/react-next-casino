import {useTranslation} from "next-i18next";
import styles from "../../../../styles/LogIn.module.scss";

export const LoginInput = ({setLoginData, loginData, errors, register}) => {
    const {t} = useTranslation('common');

    return (
        <>
            <label htmlFor={'usernameLogIn'}>
                {t('loginForm.usernameInput')}
            </label>
            <input {...register("username")}
                   onInput={(e) => setLoginData(e.target.value)}
                   value={loginData}
                   id={'usernameLogIn'}
                   type="text"/>
            <span className={styles.errorMessage}>{t(errors.username?.message)}</span>
        </>
    )
}