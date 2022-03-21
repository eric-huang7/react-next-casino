import styles from "../../../../styles/RegisterSignup.module.scss";
import {useTranslation} from "next-i18next";

export const CurrencyInput = ({ showCurrencyBlock, userCurrency }) => {
    const {t} = useTranslation('common');

    return (
        <>
            <label htmlFor={'currencyIn'}>
                {t('registrationForm.currencyInput')}
            </label>
            <input
                readOnly={true}
                // ref={currencyRef}
                className={styles.currencyInput}
                onClick={() => showCurrencyBlock()}
                value={userCurrency.abbreviation}
                id={'currencyIn'}
                type="text"
            />
        </>
    )
}