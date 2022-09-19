import { currencyInfo } from '../../../../helpers/currencyInfo'
import { dateFormatter } from '../../../../helpers/dateTranslator'
import { useRouter } from 'next/router'
import ErrorText from '../../../ErrorBoundaryComponents/ErrorText'
import {setActivePendingBonusesTerms} from "../../../../redux/user/action";
import {useDispatch, useSelector} from "react-redux";
import {showTermsModal} from "../../../../redux/popups/action";
import {BonusTermsCheck} from "../BonusTermsCheck";
import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Text
} from '@chakra-ui/react'
import RoundButton from "../../../buttons/RoundButton";
import {Badge, HStack, VStack} from "@chakra-ui/layout";

export const BonusItemContainer = ({
   t,
   bonusData,
   currencyData,
   activateBonusClickHandler,
   cancelBonusClickHandler,
 }) => {
  const router = useRouter()
  const dispatch = useDispatch()

  const authInfo = useSelector((store) => store.authInfo)

  const isFS = bonusData.free_spins_remaining > 0
  const isActive = bonusData.status === '1'
  const isTermsChecked = authInfo.activePendingBonusesTerms[bonusData.id]

  let title = bonusData.title ? bonusData.title : '-'
  let stage = statusValue(bonusData.status)
  let currency = currencyInfo(currencyData.currency.results, bonusData.currency_id)[0].abbreviation
  let amountName = isFS ? 'myAccount.bonusPage.bonusItems.games' : 'myAccount.bonusPage.bonusItems.amount'
  let amount = isFS ? bonusData.game_names : `${Number(bonusData.max_cashout_amount)} ${currency}`
  let wagerPercent = wagerPercentCalculator(bonusData.rollover_achieved, bonusData.wager_requirements, bonusData.award_amount)

  let dateReceived = dateFormatter(bonusData.time_redeemed, router.locale)
  let expiryDate = dateFormatter(bonusData.time_expires, router.locale)

  const onShowTerms = () => {
    dispatch(showTermsModal(true));
  }

  const acceptTerms = (id) => {
    dispatch(setActivePendingBonusesTerms({id, value: !authInfo.activePendingBonusesTerms[id]}))
  }
  const wagerOrFreeSpins = `myAccount.bonusPage.bonusItems.${isFS ? 'freeSpins' : 'wager'}`
  const wagerOrFreeSpinsAmount = isFS ? Number(bonusData.free_spins_awarded)
    : (bonusData.wager_requirements === null ? `0 ${currency}` : `${Number(bonusData.wager_requirements)} ${currency}`)

  const values = [
    {key: t(amountName), value: amount},
    {key: t(wagerOrFreeSpins), value: wagerOrFreeSpinsAmount},
    {key: isFS
        ? t('myAccount.bonusPage.bonusItems.freeSpinsRemaining')
        : t('myAccount.bonusPage.bonusItems.wagerPercent'),
      value: isFS ? bonusData.free_spins_remaining : `${wagerPercent}%`},
    {key: t('myAccount.bonusPage.bonusItems.dateReceived'), value: dateReceived},
    {key: t('myAccount.bonusPage.bonusItems.expiryDate'), value: expiryDate},
  ]

  return <ErrorText>
    <VStack w={{base: "100%", lg: "465px"}} borderBottom="1px solid #eeeeee" mb="35px" p="0 5px" alignItems="flex-start">
      <TableContainer>
        <Table variant="striped" colorScheme="grey">
          <Tbody>
            <Tr>
              <Td><Text color="primary.500">{title}</Text></Td>
              <Td textAlign="right">
                <Badge fontSize="15px" px="30px" h="34px" lineHeight="34px" variant='solid' fontFamily="Verdana"
                   textTransform="unset" borderRadius="17px" bg={bonusData.status === '1' ? "primary.500" : "#9e9e9e"}>
                  {t(stage)}
                </Badge>
              </Td>
            </Tr>
            {values.map((item, index) => (<Tr>
              <Td>{item.key}</Td>
              <Td>{item.value}</Td>
            </Tr>))}
          </Tbody>
        </Table>
      </TableContainer>
      <HStack w="100%" justifyContent="space-between" alignItems="center" p="20px 0" pr="8px">
        {isActive ? <BonusTermsCheck hideCheckbox onShowTerms={onShowTerms}/> : <BonusTermsCheck
          id={bonusData.id}
          onAccept={acceptTerms}
          onShowTerms={onShowTerms}
          isTermsChecked={authInfo.activePendingBonusesTerms[bonusData.id]}
        />}
        {isActive ? (
          <RoundButton fontSize="12px" onClick={() => cancelBonusClickHandler(bonusData)}
                       title={t('myAccount.bonusPage.bonusItems.cancelBonus')}/>
        ) : isTermsChecked &&
          <RoundButton fontSize="12px" solid onClick={() => activateBonusClickHandler(bonusData)}
                       title={t('myAccount.bonusPage.bonusItems.activateBonus')}/>
        }
      </HStack>
    </VStack>
  </ErrorText>
}

function wagerPercentCalculator (rollover_achieved, wager_requirements) {
  if (Number(wager_requirements) === 0) {
    return 0
  } else if (Number(rollover_achieved) === 0) {
    return 0
  } else {
    return Math.trunc((Number(rollover_achieved) / Number(wager_requirements)) * 100)
  }
}

function statusValue (status) {
  switch (status) {
    case '1':
      return 'myAccount.history.bonus.statusItems.active'
    case '2':
      return 'myAccount.history.bonus.statusItems.lost'
    case '3':
      return 'myAccount.history.bonus.statusItems.redeemed'
    case '4':
      return 'myAccount.history.bonus.statusItems.canceled'
    case '5':
      return 'myAccount.history.bonus.statusItems.pending'
    case '6':
      return 'myAccount.history.bonus.statusItems.expired'
    default:
      return '-'
  }
}
