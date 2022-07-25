import styles from '../../../styles/HomePage/RedeemPage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {showRedeemModal} from "../../../redux/popups/action";
import useWindowScroll from "../../../hooks/useWindowScroll";
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

export const RedeemPage = ({t}) => {
  let scrollHeight = useWindowScroll();
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
              <div className={styles.redeemNotificationContainer}>
                <div className={styles.redeemNotificationHeading}>
                  <div className={styles.redeemHeading}>
                    {t("redeemPage.congratulation")}
                  </div>
                  <CloseButton onClick={closeModal} />
                </div>
                <div className={styles.redeemNotificationBody}>
                  <div className={styles.redeemNotificationTitle1}>
                    {t("redeemPage.notificationTitle1")}
                  </div>
                  <div className={styles.redeemNotificationPoints}>
                    {pointBalance}{" "}{t("redeemPage.points")}
                  </div>
                  <div className={styles.redeemNotificationFor}>
                    {t("redeemPage.for")}{" "}{rewardPoint || 0}{activeCurrency?.abbreviation}
                  </div>

                  <div className={styles.redeemNotificationTitle2}>
                    {t("redeemPage.notificationTitle2")}
                  </div>
                  <div className={styles.redeemNotificationTitle3}>
                    {userData?.user?.user?.username}
                  </div>
                </div>
              </div>
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
                  className={styles.redeemBody}
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

                  <Text fontSize={17} pt="25px" fontWeight={600} textAlign="center">
                    {t('redeemPage.title7')}
                  </Text>

                  <div className={styles.balanceList}>
                    <div onClick={() => setIsShowBalanceList(true)} className={styles.pointer}>
                      <RedeemInput mt="30px" mb="30px">
                        <CurrencyIcon id={activeCurrency?.abbreviation} size={6} mr={2}/>
                        {activeCurrency?.name}
                      </RedeemInput>
                    </div>
                  </div>
                  <div className={styles.redeemTitle5}>
                    {t('redeemPage.title5')}
                  </div>
                  <div className={styles.redeemTotalButtons}>
                    {[25, 50, 75, 100].map((item, index) => (
                      <div key={index} onClick={() => setPointBalance(Math.round(item * maxPointBalance / 100))}>
                        {item}%
                      </div>
                    ))}
                  </div>

                  <RedeemInput mb="30px" value={pointBalance} onChange={onChangePoints}/>

                  <div className={styles.redeemTitle5}>
                    {t('redeemPage.title6')}
                  </div>

                  <RedeemInput mb="30px">
                    <span>{rewardPoint}</span>
                  </RedeemInput>

                  <button className={styles.button} onClick={submit}>
                    {t('redeemPage.button')}
                  </button>

                  {error && (
                    <div className={styles.redeemNotificationBody}>
                      <div className={styles.redeemNotificationPoints}>
                        {t("redeemPage.notificationSorry")}
                      </div>
                      <div className={styles.redeemError}>
                        {t("redeemPage.notificationError")}
                      </div>
                    </div>
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
