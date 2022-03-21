import styles from "../../../../styles/RegisterSignup.module.scss";
import {useTranslation} from "next-i18next";

export const SubmitButton = () => {
    const {t} = useTranslation('common');

    return (
        <div className={styles.submitButtonWrapper}>
            <button
                type={"submit"}
                form={'register_form'}
                className={styles.submitButton}>
                {t('registrationForm.signUpButton')}
            </button>
        </div>
    )
}