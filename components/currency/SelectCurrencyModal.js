import {useDispatch, useSelector} from 'react-redux'
import {useTranslation} from "next-i18next";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
} from '@chakra-ui/react'
import {ChevronLeftIcon} from "@chakra-ui/icons"
import {useEffect, useRef} from 'react'
import {
  get_crypto_currency,
  get_fiat_currency,
  get_popular_currency,
  get_stable_currency
} from '../../redux/currency/action'
import {LoadingComponent} from '../LoadingComponent/LoadingComponent'
import ErrorText from '../ErrorBoundaryComponents/ErrorText'

import {CurrencySelector} from "./CurrencySelector";

export const SelectCurrencyModal = ({
                                      isShow,
                                      onClose,
                                      onBack,
                                      onSelect,
                                    }) => {
  const {t} = useTranslation("common")
  const dispatch = useDispatch()
  const wrapperRef = useRef();

  const currencies = useSelector((store) => store.currency)
  const userAuth = useSelector((store) => store.authInfo)

  useEffect(() => {
    if (currencies?.loading_popular_currency && !currencies?.popular_currency?.success) {
      dispatch(get_popular_currency())
    }
    if (currencies?.loading_crypto_currency && !currencies?.crypto_currency?.success) {
      dispatch(get_crypto_currency())
    }
    if (currencies?.loading_stable_currency && !currencies?.stable_currency?.success) {
      dispatch(get_stable_currency())
    }
    if (currencies?.loading_fiat_currency && !currencies?.fiat_currency?.success) {
      dispatch(get_fiat_currency())
    }
  }, [])

  const isLoading = !(currencies?.popular_currency?.success
    && currencies?.crypto_currency?.success
    && currencies?.stable_currency?.success
    && currencies?.fiat_currency?.success)

  return (<Modal
    closeOnOverlayClick
    isOpen={isShow}
    onClose={onClose}
    // scrollBehavior="inside"
    isCentered
  >
    <ModalOverlay/>
    <ModalContent w="320px" h="60%" ref={wrapperRef}>
      <ModalHeader
        minH="60px"
        borderRadius="10px 10px 0 0"
        border="5px solid white"
        bg="primary.500"
        overflow="hidden"
        p={0}
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Text
          color="white"
          fontFamily="Lithograph"
          textAlign="center"
          fontSize={20}
          fontWeight={600}
        >
          {t('selectCurrency.heading')}
        </Text>
        {onBack && <ChevronLeftIcon
          position="absolute"
          w={10} h={10} left={0} top="5px"
          color="white"
          sx={{cursor: "pointer"}}
          onClick={onBack}
        />}
      </ModalHeader>
      <ModalCloseButton color="white" fontSize={18} top={15}/>
      <ModalBody p={0} position="relative">
        <ErrorText>
          {isLoading
            ? <LoadingComponent t={t}/>
            : <CurrencySelector
              t={t}
              popularCurrency={currencies?.popular_currency?.results}
              cryptoCurrency={currencies?.crypto_currency?.results}
              stableCurrency={currencies?.stable_currency?.results}
              fiatCurrency={currencies?.fiat_currency?.results}
              backButtonClickHandler={onBack}
              onSelect={onSelect}
              userAuth={userAuth.isAuthenticated}
              parentHeight={wrapperRef?.current?.offsetHeight}
            />
          }
        </ErrorText>
      </ModalBody>
    </ModalContent>
  </Modal>)
}
