import styles from "../../../styles/MyAccount/BonusPage/BonusCheck.module.scss";
import {useTranslation} from "next-i18next";

export const BonusTermsCheck = ({onAccept, onShowTerms, isTermsChecked, id, hideCheckbox}) => {
    const {t} = useTranslation('common');

    return (
        <div className={styles.agreeTermsWrapper}>
            {!hideCheckbox && <input
                onChange={() => onAccept(id)}
                className={styles.agreeTermsCheckbox}
                id={`agreeTerms_${id}`}
                type="checkbox"
                checked={isTermsChecked}
            />}
            {!hideCheckbox && <label
                htmlFor={`agreeTerms_${id}`}
                className={styles.iReadAndAgreeLabel}
            >
                {t('registrationForm.iReadAndAgree')} <a href="javascript:void(0);" onClick={onShowTerms}>
                    {t('registrationForm.termsOfUseLink')}
                </a>
            </label>}
            {hideCheckbox && <a href="javascript:void(0);" onClick={onShowTerms}>
                {t('registrationForm.termsOfUseLink')}
            </a>}
        </div>
    )
}
