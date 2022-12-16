import { Navigation } from "./Navigation/Navigation";
import { UserBlockNavigation } from "./UserBlock/UserBlock";
import { useDispatch, useSelector } from "react-redux";
import { auth, userBalance } from "/redux/user/action";
import { useEffect, useState } from "react";
import { Box, Image } from "@chakra-ui/react"
import LangSwitcher from "../../LangSwitcher/LangSwitcher";
import { getActiveBonuses } from "/redux/bonuses/action";
import { changeLocalUserSubscriptions } from "/redux/userSubscriptions/action";
import { setUserCurrencySwitcher } from "/redux/userFinance/action";
import Link from "next/link";
import ErrorEmpty from "/components/ErrorBoundaryComponents/ErrorEmpty";
import { AiOutlineMenu } from "react-icons/ai";
import MenuModal from "../../modals/MenuModal";
import {HStack} from "@chakra-ui/layout";
import {assetsPath} from "../../../../../envs/theme";

export const Header = () => {
  const dispatch = useDispatch();
  const [isMenuActive, setIsMenuActive] = useState(false);

  const userLogin = useSelector((userInfo) => userInfo.authInfo);
  let userLogined = userLogin.isAuthenticated;
  let bonusesData = useSelector((store) => store.bonuses);
  let currencyData = useSelector((store) => store.currency?.currency);
  const userCurrency = useSelector((state) => state.userFinance);

  useEffect(() => {
    let userLogLocal = localStorage.getItem("userAuth");

    if (userLogined) {
      if (!bonusesData.activeBonuses) {
        dispatch(getActiveBonuses(userCurrency?.userCurrencyData?.id));
      }

      let userData = {
        id: userLogin.user.user.id,
        transactional_email_opt_in:
          userLogin.user.user.transactional_email_opt_in,
        transactional_sms_opt_in: userLogin.user.user.transactional_sms_opt_in,
        browser_opt_in: userLogin.user.user.browser_opt_in,
      };
      dispatch(changeLocalUserSubscriptions(userData));
    } else {
      if (JSON.parse(userLogLocal)) {
        dispatch(auth());
      }
    }
  }, [userLogin.isAuthenticated]);

  useEffect(() => {
    dispatch(getActiveBonuses(userCurrency?.userCurrencyData?.id));
  }, [userCurrency?.userCurrencyData?.id]);

  useEffect(() => {
    if (userLogined && !userLogin.balance) {
      dispatch(userBalance());
    }
  }, [userLogin.balance, userLogin.isAuthenticated]);

  useEffect(() => {
    if (userLogin.isAuthenticated) {
      if (userLogin.balance && currencyData) {
        let userActiveCurrency = userLogin.balance?.balances.find(
          (balance) => !!Number(balance.is_default)
        );
        let userCurrency = "";

        try {
          userCurrency = currencyData.results.find(
            (currency) =>
              Number(currency.id) === Number(userActiveCurrency.currency_id)
          );
          dispatch(setUserCurrencySwitcher(userCurrency));
        } catch (e) {}
      }
    }
  }, [userLogin.balance, currencyData, userLogin.isAuthenticated]);

  const showMenu = () => {
    setIsMenuActive(true);
  };
  const onCloseMenu = () => {
    setIsMenuActive(false);
  };

  return (
    <>
      <HStack
        position="relative"
        h={{base: "53px", lg: "75px"}}
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="black"
        spacing={0}
        zIndex={14}
      >
        <HStack alignItems="center" flexWrap="nowrap" spacing={5}>
          <Box cursor="pointer" display={{base: 'none', lg: 'block'}} pl="30px">
            <AiOutlineMenu
              onClick={showMenu}
              color="white"
              size={30}
            />
          </Box>
          <Link href={"/"} passHref>
            <Image
              w={{base: '100px', lg: '250px'}}
              h="auto"
              m="2px 16px 2px 16px"
              style={{ cursor: "pointer" }}
              src={`${assetsPath}/img/mainLayoutImg/logo.webp`}
              alt=""
            />
          </Link>
          <Navigation />
        </HStack>
        <ErrorEmpty>
          <LangSwitcher />
        </ErrorEmpty>
        <UserBlockNavigation userInfo={userLogin} />
      </HStack>
      <MenuModal open={isMenuActive} onClose={onCloseMenu} />
    </>
  );
};
