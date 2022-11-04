import {useDispatch, useSelector} from "react-redux"
import {useState} from "react"
import {Box, HStack, Text} from "@chakra-ui/layout"
import {useRouter} from "next/router";
import SelectModal from "../../modal/SelectModal"
import DepositCurrencySelector from './DepositCurrencySelector'
import {BonusesBlockMainContainer} from './BonusesBlock/BonusesBlockMainContainer'
import {ChoosePaymentMethod} from './ChoosePaymentMethod'
import {DepositLastPage} from './DepositLastPage'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'
import {setStepDepositModal} from "../../../redux/popups/action";
import ModalTopHeader from "../../modal/ModalTopHeader";
import {setErrorUserDepositValue} from "../../../redux/userFinance/action";
import {numberTransformer} from "../../../helpers/numberTransformer";
import SubmitButton from "../../buttons/SubmitButton";
import SelectCurrencyDropdown from "../../currency/SelectCurrencyDropdown";
import BonusesSlider from "./BonusesBlock/BonusesSlider";

const paymentImages = [
  {id: 1, src: '/assets/img/depositPage/visa.svg', name: "visa logo"},
  {id: 2, src: '/assets/img/depositPage/skrill.svg', name: "skrill logo"},
  {id: 3, src: '/assets/img/depositPage/eco_payz.svg', name: "eco_payz logo"},
  {id: 4, src: '/assets/img/depositPage/bitcoin.svg', name: "bitcoin logo"},
]

export const DepositPageStepper = (props) => {
  let {
    step,
    t,
    closeDepositModalHandler,
    userCurrency,
    currencySwitcherShowHandler,
    isChecked,
    checkedInputHandler,
    depositValueInputHandler,
    userDepositValue,
    userPayment,
    userInfo,
    chooseBonusClickHandler,
    setDepositButtonText,
    buttonText,
    userSelectedBonus,
    bonusesArr,
  } = props

  const router = useRouter()
  const dispatch = useDispatch()
  const [isActiveBonusInput, setIsActiveBonusInput] = useState(false)
  const [paymentMethods, setPaymentMethods] = useState(null)
  const [selectedCurrency, setSelectedCurrency] = useState(null)

  const userDepositValueError = useSelector((state) => state.userFinance.errorMessage)

  const bonusCodeInputActiveHandler = () => {
    if (isActiveBonusInput) {
      setIsActiveBonusInput(false)
    } else {
      setIsActiveBonusInput(true)
    }
  }

  const stepHandler = (step) => {
    dispatch(setStepDepositModal(step + 1))
  }

  const submitButtonHandler = () => {
    const max = Number(userCurrency?.userCurrencyData?.depositMax);
    const min = Number(userCurrency?.userCurrencyData?.depositMin);
    const decimal = userCurrency?.userCurrencyData?.decimal;

    if (step === 1 || step === 3) {
      if (userDepositValue < min && min > 0) {
        dispatch(setErrorUserDepositValue(
          t('depositPage.errors.wrongValueMin', {value: numberTransformer(min.toFixed(Math.min(9, decimal)))})
        ))
      } else if (userDepositValue > max && max > 0) {
        dispatch(setErrorUserDepositValue(
          t('depositPage.errors.wrongValueMax', {value: numberTransformer(max.toFixed(Math.min(9, decimal)))})
        ))
      } else if ((userDepositValue > 0) && !!userDepositValue) {

        dispatch(setErrorUserDepositValue(''))

        if (step === 3) {

        } else {

          stepHandler(step)
        }

      } else {

        dispatch(setErrorUserDepositValue(t('depositPage.errors.wrongValue')))
      }
    }
  }

  const onSelectCurrency = (value) => {
    setSelectedCurrency(value);
    console.log('onSelect', value)
  }

  const getHeader = () => <Box
    position="absolute"
    top={{base: "-120px", lg: "-80px"}}
    left="calc((430px - 100vw) / 2)"
    width="100vw"
  >
    <Text
      fontFamily={router.locale === 'ru' ? "Lithograph" : "Arial"}
      color="primary.500"
      fontSize="40px"
      fontWeight={700}
      letterSpacing="1px"
      textTransform="uppercase"
      textAlign="center"
    >
      {t('depositPage.mainHeading')}
    </Text>
  </Box>

  switch (step) {
    case  1:
      return (
        <SelectModal
          isOpen={true}
          width={500}
          headerHeight={70}
          onClose={closeDepositModalHandler}
          title={t("depositPage.innerHeading")}
          footer={<SubmitButton title={buttonText} onClick={submitButtonHandler} />}
          before={<ModalTopHeader width="500px" title={t('depositPage.mainHeading')} />}
        >
          {isActiveBonusInput
            ? <BonusesSlider />
            : <Box pb="34px" px={{base: "16px", lg: "20px"}}>
            <ErrorText>
              <SelectCurrencyDropdown
                onSelect={onSelectCurrency}
                value={selectedCurrency}
                t={t}
              />
            </ErrorText>

            <ErrorText>
              <BonusesBlockMainContainer
                t={t}
                isChecked={isChecked}
                checkedInputHandler={checkedInputHandler}
                isActiveBonusInput={isActiveBonusInput}
                userCurrency={userCurrency}
                chooseBonusClickHandler={chooseBonusClickHandler}
                setDepositButtonText={setDepositButtonText}
                userDepositValue={userDepositValue}
                userSelectedBonus={userSelectedBonus}
                bonusesArr={bonusesArr}
              />
            </ErrorText>

            <HStack onClick={bonusCodeInputActiveHandler} w="100%" justifyContent="center" pt="40px">
              <Text fontSize={18} fontWeight={400} fontFamily="Montserrat" color="white" cursor="pointer" textTransform="capitalize">
                {isActiveBonusInput ? t("depositPage.iDontHaveBonusCodeButton") : t("depositPage.iHaveBonusCodeButton")}
              </Text>
            </HStack>
          </Box>}
        </SelectModal>
      )
    case 2:
      return (
        <SelectModal
          isOpen={true}
          width={430}
          headerHeight={70}
          onClose={closeDepositModalHandler}
          onBack={() => stepHandler(0)}
          title={t("depositPage.innerHeading")}
          before={getHeader()}
        >
          <Box p={2}>
            <ErrorText>
              <ChoosePaymentMethod
                t={t}
                userPayment={userPayment}
                paymentMethods={paymentMethods}
                userCurrency={userCurrency}
                setPaymentMethods={setPaymentMethods}
                stepHandler={() => stepHandler(step)}
              />
            </ErrorText>
          </Box>
        </SelectModal>
      )
    case 3:
      return (
        <SelectModal
          isOpen={true}
          width={430}
          headerHeight={70}
          onClose={closeDepositModalHandler}
          onBack={() => stepHandler(1)}
          title={t("depositPage.innerHeading")}
          footer={<SubmitButton title="Submit" onClick={submitButtonHandler} fontFamily="Lithograph"/>}
          before={getHeader()}
        >
          <ErrorText>
            <DepositLastPage
              t={t}
              userDepositValue={userDepositValue}
              depositValueInputHandler={depositValueInputHandler}
              userDepositValueError={userDepositValueError}
              userInfo={userInfo}
              userCurrency={userCurrency}
            />
          </ErrorText>
        </SelectModal>
      )
  }
}
