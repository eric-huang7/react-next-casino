import {useDispatch, useSelector} from "react-redux";
import {showRedeemModal} from "../../../redux/popups/action";
import {RedeemInput} from "./RedeemInput";
import {useEffect, useState} from "react";
import {currencyFinder} from "../../../helpers/currencyFinder";
import Connect from "../../../helpers/connect";
import {get_reward_point_url, reward_point_url} from "../../../redux/url/url";
import {SelectCurrencyModal} from "../../currency/SelectCurrencyModal";
import {Modal, ModalContent, ModalBody, ModalOverlay} from "@chakra-ui/react";
import CurrencyIcon from "../../currency/CurrencyIcon";
import {Box, HStack, Text, VStack} from "@chakra-ui/layout";
import CloseButton from "../../buttons/CloseButton";
import {Button} from "@chakra-ui/button";
import {useTranslation} from "next-i18next";

const Title = ({children, ...props}) =>
  <Text fontSize={17} pt="25px" fontWeight={600} textAlign="center" {...props}>{children}</Text>

const RedeemPage = () => {
  const { t } = useTranslation('common')
  const dispatch = useDispatch();
  const isShowRedeemModal = useSelector(({popups}) => popups?.isShowRedeemModal);
  const userData = useSelector((store) => store.authInfo);
  const [maxPointBalance, setMaxPointBalance] = useState(0)
  const [pointBalance, setPointBalance] = useState(0)
  const [activeCurrency, setActiveCurrency] = useState()
  const [rewardPoint, setRewardPoint] = useState(0)
  const [isShowBalanceList, setIsShowBalanceList] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [error, setError] = useState(false)

  const userCurrency = useSelector((state) => state.currency)
  const userInfo = useSelector((state) => state.authInfo)

  const getPointBalance = () => {
    Connect.get(get_reward_point_url, {}, (status, data) => {
      const points = Math.floor(data?.result?.total || 0)
      setPointBalance(points)
      setMaxPointBalance(points)
    }).catch((error) => {
      console.log('error', error?.message);
    })
  }

  const getRewardPoint = () => {
    const payload = {
      is_preview: true,
      points_to_redeem: pointBalance,
      currency_id_to_redeem_in: activeCurrency?.id,
      user_id: userData.user.user.id
    }

    Connect.put(reward_point_url, JSON.stringify(payload), {}, (status, data) => {
      setRewardPoint(data?.award_amount || 0)
    }).catch((error) => {
      setError(true);
      setShowNotification(false);
    })
  }

  useEffect(() => {
    if (isShowRedeemModal) {
      setShowNotification(false)
      setError(false)
      getPointBalance();
    }
  }, [isShowRedeemModal])

  useEffect(() => {
    if (pointBalance && activeCurrency?.id) {
      getRewardPoint();
    } else {
      setRewardPoint(0);
    }
  }, [pointBalance, activeCurrency?.id])

  useEffect(() => {
    if (userCurrency.currency && userInfo.balance && isShowRedeemModal) {
      let balanceData = userInfo?.balance?.balances.filter((el) => !!Number(el.is_default))
      const currency = currencyFinder(balanceData, userInfo, userCurrency);
      const activeCurrency = userCurrency.currency.results.find((el) => el.abbreviation === currency);
      setActiveCurrency(activeCurrency)
    }
  }, [userCurrency, userInfo, isShowRedeemModal])

  const closeModal = () => {
    dispatch(showRedeemModal(false));
  }

  const onSelectCurrency = (value) => {
    setIsShowBalanceList(false)
    setActiveCurrency(value)
  }

  const onChangePoints = (e) => {
    const value = Math.floor(parseFloat(e.target.value)) || 0

    if (value <= maxPointBalance) {
      setPointBalance(value)
    }
  }

  const submit = () => {
    const payload = {
      is_preview: false,
      points_to_redeem: pointBalance,
      currency_id_to_redeem_in: activeCurrency?.id,
      user_id: userData.user.user.id
    }

    Connect.put(reward_point_url, JSON.stringify(payload), {}, (status, data) => {
      setShowNotification(true);
    }).catch((error) => {
      setError(true);
      setShowNotification(false);
    })
  }

  return (
    <>
      <Modal
        closeOnOverlayClick
        isOpen={isShowRedeemModal}
        onClose={closeModal}
        scrollBehavior="outside"
      >
        <ModalOverlay/>
        <ModalContent w="500px" maxW="500px" minW="340px">
          <ModalBody p={0}>
            {showNotification && (
              <VStack
                w="100%"
                minHeight={100}
                bg="url('/assets/img/redeemPage/notification-bg.jpg')"
                spacing={0}
                pb="24px"
              >
                <HStack h="72px" bg="accent.900" w="100%" position="relative" justifyContent="center">
                  <Text
                    fontSize={26}
                    fontWeight={600}
                    color="accent.400"
                    fontFamily="Lithograph"
                  >
                    {t("redeemPage.congratulation")}
                  </Text>
                  <CloseButton onClick={closeModal} />
                </HStack>
                <VStack
                  flex={1}
                  textAlign="center"
                  color="white"
                  p="20px 16px 0px"
                  fontFamily="Lithograph"
                  textTransform="uppercase"
                  position="relative"
                >
                  <Text as="div" fontSize={22} mb="5px" fontWeight={600}>
                    {t("redeemPage.notificationTitle1")}
                  </Text>
                  <Text as="div" fontSize={34} mb="5px" fontWeight={600} color="accent.400">
                    {pointBalance}{" "}{t("redeemPage.points")}
                  </Text>
                  <Text as="div" fontSize={16} mb="11px" fontWeight={400}>
                    {t("redeemPage.for")}{" "}{rewardPoint || 0}{activeCurrency?.abbreviation}
                  </Text>

                  <Text as="div" fontSize={20} fontWeight={600}>
                    {t("redeemPage.notificationTitle2")}
                  </Text>
                  <Text as="div" fontSize={20} fontWeight={600} color="accent.400">
                    {userData?.user?.user?.username}
                  </Text>
                </VStack>
              </VStack>
            )}
            {!showNotification && (
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
                    {t("redeemPage.heading")}
                  </Text>
                  <CloseButton dark top="30px" onClick={closeModal} />
                </HStack>

                <VStack
                  spacing={0}
                  p="63px 16px 35px"
                  fontFamily="Lithograph"
                  textTransform="uppercase"
                  color="white"
                >
                  <Text fontSize={13} mt="17px">
                    {t('redeemPage.title1')}{" "}<b>1000{" "}{t('redeemPage.points')}</b>
                  </Text>
                  <Text fontSize={20} mb="22px" fontWeight={600}>
                    {t('redeemPage.title2')}
                  </Text>
                  <Text fontSize={34} mb="30px" fontWeight={600} color="accent.400">
                    {pointBalance?.toLocaleString()} {t('redeemPage.points')}
                  </Text>
                  <Text fontSize={16} fontWeight={600}>
                    {t('redeemPage.title3')}
                  </Text>
                  <Text  fontSize={16} pb="15px">
                    <b>$1</b>{" "}{t('redeemPage.title4')}{" "}<b>100{" "}{t('redeemPage.points')}</b>
                  </Text>

                  <Box w={298} h="2px" bg="accent.600" margin="auto"/>

                  <Title>
                    {t('redeemPage.title7')}
                  </Title>

                  <Box onClick={() => setIsShowBalanceList(true)} cursor="pointer">
                    <RedeemInput mt="30px" mb="30px">
                      <CurrencyIcon id={activeCurrency?.abbreviation} size={6}/>
                      <Text>{activeCurrency?.name}</Text>
                    </RedeemInput>
                  </Box>

                  <Title>
                    {t('redeemPage.title5')}
                  </Title>
                  <HStack spacing={4}>
                    {[25, 50, 75, 100].map((item, index) => (
                      <Box
                        key={index}
                        color="accent.400"
                        cursor="pointer"
                        my={0}
                        // mx="8px"
                        borderBottom="2px solid"
                        borderColor="accent.400"
                        onClick={() => setPointBalance(Math.round(item * maxPointBalance / 100))}
                      >
                        <Title pt={0}>
                          {item}%
                        </Title>
                      </Box>
                    ))}
                  </HStack>

                  <RedeemInput mb="5px" value={pointBalance} onChange={onChangePoints}/>

                  <Title>
                    {t('redeemPage.title6')}
                  </Title>

                  <RedeemInput mb="30px">
                    <span>{rewardPoint}</span>
                  </RedeemInput>

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
                      {t('redeemPage.button')}
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
                        {t("redeemPage.notificationSorry")}
                      </Text>
                      <Text
                        as="div"
                        fontSize="14px"
                        fontWeight={600}
                        mt="11px"
                        textAlign="center"
                      >
                        {t("redeemPage.notificationError")}
                      </Text>
                    </Box>
                  )}
                </VStack>

                <Box w="100%" h="36px" bg="url('/assets/img/redeemPage/redeem-footer-bg.jpg')" />
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>

      <SelectCurrencyModal
        isOpen={isShowBalanceList}
        onClose={() => setIsShowBalanceList(false)}
        onSelect={onSelectCurrency}
      />
    </>
  )
}

export default RedeemPage;
