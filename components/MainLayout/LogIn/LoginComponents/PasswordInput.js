import {useTranslation} from "next-i18next";
import styles from "../../../../styles/LogIn.module.scss";

export const PasswordInput = ({setPasswordData, passwordData, passwordInputType, errors, showPass, register}) => {
    const {t} = useTranslation('common');


    return (
        <>
            <label htmlFor={'passwordLogIn'}>
                {t('loginForm.passwordInput')}
            </label>
            <label className={styles.passwordEye}   htmlFor={'passwordLogIn'}>
                <img onClick={() => showPass()} src={'/assets/img/registerSignup/eye.svg'} alt="show pass icon"/>
                <input {...register("password")}
                       onInput={(e) => setPasswordData(e.target.value)}
                       value={passwordData}
                       id={'passwordLogIn'}
                       type={passwordInputType}
                />
            </label>
            <span className={styles.errorMessage}>{t(errors.password?.message)}</span>
        </>
    )
}