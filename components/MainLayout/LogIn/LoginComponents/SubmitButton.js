import styles from "../../../../styles/LogIn.module.scss";
import {useTranslation} from "next-i18next";

export const SubmitButton = () => {
    const {t} = useTranslation('common');

    return (
        <div className={styles.submitButtonWrapper}>
            <button
                // onClick={() => loginUser()}
                type={"submit"}
                form={'login_form'}
                className={styles.submitButton}
            >
                {t('loginForm.signUpButton')}
            </button>
        </div>
    )
}