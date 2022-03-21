import styles from "../../../../styles/RegisterSignup.module.scss";
import Link from "next/link";
import {useTranslation} from "next-i18next";

export const TermsCheckContainer = ({youAgreeHandler, registerCloseButtonHandler}) => {
    const {t} = useTranslation('common');

    return (
        <div className={styles.agreeTermsWrapper}>
            <input
                onChange={(e) => youAgreeHandler(e)}
                className={styles.agreeTermsCheckbox}
                id={"agreeTerms"}
                type="checkbox"
            />
            <label
                htmlFor={"agreeTerms"}
                className={styles.iReadAndAgreeLabel}
            >
                {t('registrationForm.iReadAndAgree')}
            </label>
            <Link href={'/termsAndConditions'}>
                <a
                onClick={() => registerCloseButtonHandler()}
                >
                    {t('registrationForm.termsOfUseLink')}
                </a>
            </Link>
        </div>
    )
}