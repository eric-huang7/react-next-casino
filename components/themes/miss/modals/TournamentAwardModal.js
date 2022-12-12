import {useDispatch, useSelector} from "react-redux";
import {showTournamentAwardModal} from "/redux/popups/action";
import {useEffect, useState} from "react";
import {currencyFinder} from "/helpers/currencyFinder";
import Connect from "/helpers/connect";
import {tournament_award_url} from "/redux/url/url";
import {siteID} from "/envs/envsForFetching";
import {Box, HStack, Text, VStack} from "@chakra-ui/layout";
import CloseButton from "/components/buttons/CloseButton";
import {Modal, ModalBody, ModalContent, ModalOverlay} from "@chakra-ui/react";
import {Button} from "@chakra-ui/button";
import {RedeemInput} from "./RedeemPage/RedeemInput";
import CurrencyIcon from "../currency/CurrencyIcon";
import {SelectCurrencyModal} from "../currency/SelectCurrencyModal";
import {useTranslation} from "next-i18next";

const TournamentAwardModal = () => {
  const dispatch = useDispatch();
  const isTournamentAwardModal = useSelector(({popups}) => popups?.isTournamentAwardModal);
  const [activeCurrency, setActiveCurrency] = useState()
  const [isShowBalanceList, setIsShowBalanceList] = useState()
  const [error, setError] = useState(false)

  const userCurrency = useSelector((state) => state.currency)
  const userInfo = useSelector((state) => state.authInfo)

  useEffect(() => {
    if (userCurrency.currency && userInfo.balance && isTournamentAwardModal) {
      let balanceData = userInfo?.balance?.balances.filter((el) => !!Number(el.is_default))
      const currency = currencyFinder(balanceData, userInfo, userCurrency);
      const activeCurrency = userCurrency.currency.results.find((el) => el.abbreviation === currency);
      setActiveCurrency(activeCurrency)
    }
  }, [userCurrency, userInfo, isTournamentAwardModal])

  const closeModal = () => {
    dispatch(showTournamentAwardModal(false));
  }

  const submit = () => {
    const payload = {
      site_id: siteID,
      currency_id: activeCurrency?.id,
    }
    Connect.post(tournament_award_url, JSON.stringify(payload), {}, (status, data) => {
      closeModal();
    }).catch((error) => {
      setError(true);
    })
  }

  const onSelectCurrency = (value) => {
    setIsShowBalanceList(false)
    setActiveCurrency(value)
  }

  return isTournamentAwardModal ? (
    <>
      <Modal
        closeOnOverlayClick
        isOpen
        onClose={closeModal}
        scrollBehavior="outside"
      >
        <ModalOverlay/>
        <ModalContent w="500px" maxW="500px" minW="340px">
          <ModalBody p={0}>
            {!error && (
              <VStack
                w="100%"
                minHeight={100}
                bg="url('/assets/img/redeemPage/redeem-bg.jpg')"
                spacing={0}
              >
                <HStack
                  w="100%"
                  h="79px"
                  justifyContent="center"
                  alignItems="center"
                  position="relative"
                  bg="url('/assets/img/redeemPage/redeem-header-bg.jpg')"
                >
                  <Text
                    casing="uppercase"
                    fontSize={28}
                    fontWeight={600}
                    lineHeight="79px"
                    color="accent.900"
                    fontFamily="Lithograph"
                    sx={{
                      "-webkit-text-stroke-width": "1px",
                      "-webkit-text-stroke-color": "white"
                    }}
                  >
                    {t("tournaments.award.heading")}
                  </Text>
                  <CloseButton dark top="30px" onClick={closeModal} />
                </HStack>

                <VStack
                  spacing={0}
                  p="23px 16px 35px"
                  fontFamily="Lithograph"
                  textTransform="uppercase"
                  color="white"
                >
                  <Text fontSize={17} mt="25px" fontWeight={600}>
                    {t("tournaments.award.title")}
                  </Text>

                  <Box onClick={() => setIsShowBalanceList(true)} cursor="pointer">
                    <RedeemInput mt="30px" mb="30px">
                      <CurrencyIcon id={activeCurrency?.abbreviation} size={6}/>
                      <Text>{activeCurrency?.name}</Text>
                    </RedeemInput>
                  </Box>

                  <Button
                    p="10px 22px"
                    h="52px"
                    bg="linear-gradient(0deg, #FCDC8F, #FCDC8F), #FCDC8F"
                    _hover={{
                      bg: "linear-gradient(0deg, #FCDC8F, #FCDC8F), #FCDC8F"
                    }}
                    border="6px solid"
                    borderColor="accent.800"
                    borderTop="6px solid"
                    borderTopColor="accent.100"
                    borderRadius={0}
                    onClick={submit}
                  >
                    <Text
                      as="div"
                      fontSize={24}
                      fontWeight={600}
                      fontFamily="Lithograph"
                      textTransform="uppercase"
                      color="accent.900"
                    >
                      {t("tournaments.award.save")}
                    </Text>
                  </Button>

                  {error && (
                    <Box
                      flex={1}
                      textAlign="center"
                      color="white"
                      p="20px 16px 0px"
                      fontFamily="Lithograph"
                      textTransform="uppercase"
                      position="relative"
                    >
                      <Text
                        as="div"
                        fontSize="34px"
                        fontWeight={600}
                        mb="5px"
                        color="accent.400"
                      >
                        {t("tournaments.award.notificationSorry")}
                      </Text>
                      <Text
                        as="div"
                        fontSize="14px"
                        fontWeight={600}
                        mt="11px"
                        textAlign="center"
                      >
                        {t("tournaments.award.error")}
                      </Text>
                    </Box>
                  )}
                </VStack>
              </VStack>
            )}
            <Box w="100%" h="36px" bg="url('/assets/img/redeemPage/redeem-footer-bg.jpg')" />
          </ModalBody>
        </ModalContent>
      </Modal>
      <SelectCurrencyModal
        isOpen={isShowBalanceList}
        onClose={() => setIsShowBalanceList(false)}
        onSelect={onSelectCurrency}
      />
    </>
  ) : null
}

export default TournamentAwardModal;
