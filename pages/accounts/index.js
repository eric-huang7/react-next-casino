/* eslint-disable react-hooks/exhaustive-deps */
import {useTranslation} from "next-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {getCurrency} from "../../redux/currency/action";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {getActiveBonuses} from "../../redux/bonuses/action";

import {AccountMainLayout} from "../../components/MyAccountMainLayout/AccountMainLayout";
import {LoadingComponent} from "../../components/LoadingComponent/LoadingComponent";
import { HStack } from "@chakra-ui/react";

const Accounts = (props) => {
  const { t } = useTranslation('common');
  const dispatch = useDispatch();
  const currency = useSelector((store) => store.currency);
  let bonusesData = useSelector((store) => store.bonuses);
  const userCurrency = useSelector((state) => state.userFinance);

  useEffect(() => {

    if (!currency.currency) {
      dispatch(getCurrency());
    }

    if (!bonusesData.activeBonuses) {
      dispatch(getActiveBonuses(userCurrency.userCurrencyData.id));
    }
  }, []);

  useEffect(() => {
    dispatch(getActiveBonuses(userCurrency.userCurrencyData.id));
  }, [userCurrency.userCurrencyData.id])


  return (
    <AccountMainLayout t={t}>
      <HStack alignItems="center" justifyContent="center">
        <LoadingComponent t={t} />
      </HStack>
    </AccountMainLayout>
  )


}



export const getServerSideProps = async ({ locale }) => {
  return ({
    props: {
      ...await serverSideTranslations(locale, ['promotionsPage', 'common']),
    },
  })
}

export default  Accounts;
