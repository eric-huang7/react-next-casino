import {useTranslation} from "next-i18next";
import styles from "../../../../styles/RegisterSignup.module.scss";

export const PasswordContainer = ({passwordInputType, showPass, setPasswordData, errors, register}) => {
    const {t} = useTranslation('common');

    return (
        <>
            <label htmlFor={'passwordIn'}>
                {t('registrationForm.passwordInput')}
            </label>
            <label className={styles.passwordEye} htmlFor={'passwordIn'}>
                <img onClick={() => showPass()} src={'/assets/img/registerSignup/eye.svg'} alt="show pass icon"/>
                <input
                    onChange={(e) => setPasswordData(e.target.value)}
                    id={'passwordIn'}
                    type={passwordInputType}
                    {...register("password")}
                />
            </label>
            <span className={styles.errorMessage}>{t(errors.password?.message)}</span>
        </>
    )
}