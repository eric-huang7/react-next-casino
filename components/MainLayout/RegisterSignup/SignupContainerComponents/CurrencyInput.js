import styles from "../../../../styles/RegisterSignup.module.scss";
import {useTranslation} from "next-i18next";
import CurrencyIcon from "../../../currency/CurrencyIcon";
import {HStack, Text} from "@chakra-ui/react";

export const CurrencyInput = ({ showCurrencyBlock, userCurrency }) => {
    const {t} = useTranslation('common');

    return (
        <>
            <label htmlFor={'currencyIn'}>
                {t('registrationForm.currencyInput')}
            </label>
            <HStack className={styles.input} onClick={showCurrencyBlock} mb={0}>
              <CurrencyIcon id={userCurrency?.abbreviation} size={8} />
              <Text>{userCurrency?.abbreviation}</Text>
            </HStack>
        </>
    )
}
