import { LoadingComponent } from '../../LoadingComponent/LoadingComponent'
import { BonusItemContainer } from './BonusPageComponents/BonusItemContainer'
import { AddPromoCodeContainer } from './BonusPageComponents/AddPromoCodeContainer'
import {useDispatch, useSelector} from 'react-redux'
import { Box } from "@chakra-ui/react"
import {
  activateBonus,
  cancelBonus,
  getUserActivePendingBonuses,
  setActivePendingBonusesTerms
} from '../../../redux/user/action'
import { useState } from 'react'
import {user_url} from '../../../redux/url/url'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'
import Connect from "../../../helpers/connect";
import LinkButton from "../../buttons/LinkButton";
import {useRouter} from "next/router";
import {Text} from "@chakra-ui/layout";

const CustomLink = ({children, ...props}) => <LinkButton fontWeight={600} fontSize="15px" fontFamily="Verdana" {...props}>
  {children}
</LinkButton>

export const BonusPageInfoContainer = ({ t, bonusInfo, currency }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  let errorText = 'myAccount.bonusPage.addPromoCode.invalidPromo'
  let bonusNeedDepositText = 'myAccount.bonusPage.addPromoCode.bonusNeedDeposit'

  const activateBonusClickHandler = (bonusData) => {
    let params = {
      user_id: bonusInfo.user.user.id,
      bonus_redemption_id: bonusData.id,
      status: 1
    }
    dispatch(activateBonus(params))
  }
  const cancelBonusClickHandler = (bonusData) => {
    let params = {
      user_id: bonusInfo.user.user.id,
      bonus_redemption_id: bonusData.id
    }
    dispatch(cancelBonus(params))
  }

  const [promoCodeValue, setPromoCodeValue] = useState('')
  const [promoErrorValue, setPromoErrorValue] = useState('')
  const [promoDepositText, setPromoDepositText] = useState('')
  const promoCodeInputHandler = (value) => {
    setPromoCodeValue(value)
  }

  const savePromoCodeClickHandler = (e) => {
    e.preventDefault()

    const userData = {
      id: bonusInfo.user.user.id,
      current_bonus_code: promoCodeValue,
    }
    Connect.patch(user_url, JSON.stringify(userData), {}, (status, data) => {
      if (!data.bonus_spec) {
        dispatch(getUserActivePendingBonuses({ status: '1,5' }))
        setPromoDepositText('')
      } else {
        setPromoDepositText(t(bonusNeedDepositText))
      }
      setPromoCodeValue('')
      setPromoErrorValue('')
    }).catch((errorData) => {
      setPromoCodeValue('')
      setPromoDepositText('')
      setPromoErrorValue(t(errorText) + ' ' + promoCodeValue)
    })
    // dispatch(patchUserBonusCode(userData))
  }

  const getLink = () => <Box py="30px">
    <CustomLink onClick={() => router.push('/accounts/history/history/bonus')}>
      {t('myAccount.bonusPage.bonusHistoryLink')} &gt;&gt;
    </CustomLink>
  </Box>

  return (bonusInfo?.activePendingBonuses?.success && !currency.loading) ? (
    bonusInfo.activePendingBonuses.bonuses.length === 0 ? (
      <>
        <Box borderBottom="1px solid #eeeeee">
          <Text fontSize="15px" color="#595656" fontFamily="Verdana" ml="30px"
          >
            {t('myAccount.bonusPage.noBonuses')}
          </Text>
          {getLink()}
        </Box>
        <ErrorEmpty>
          <AddPromoCodeContainer
            promoCodeInputHandler={promoCodeInputHandler}
            savePromoCodeClickHandler={savePromoCodeClickHandler}
            promoCodeValue={promoCodeValue}
            isCenter={false}
            t={t}
            promoErrorValue={promoErrorValue}
            promoDepositText={promoDepositText}
          />
        </ErrorEmpty>
      </>
    ) : (
      <div>
        <Box
          display={{base: "flex", lg: "grid"}}
          justifyContent="center"
          gridTemplateColumns={{base: "auto", lg: "1fr 1fr"}}
          flexDirection="column"
          alignItems="center"
        >
          {bonusInfo.activePendingBonuses.bonuses.map((bonus) => (
            <ErrorText key={`${bonus.id} bonus key`}>
              <BonusItemContainer
                activateBonusClickHandler={activateBonusClickHandler}
                cancelBonusClickHandler={cancelBonusClickHandler}
                key={`${bonus.id} bonus key`}
                currencyData={currency}
                bonusData={bonus}
                t={t}
              />
            </ErrorText>
          ))}
          <ErrorEmpty>
            <AddPromoCodeContainer
              promoCodeInputHandler={promoCodeInputHandler}
              savePromoCodeClickHandler={savePromoCodeClickHandler}
              promoCodeValue={promoCodeValue}
              isCenter={true}
              t={t}
              promoErrorValue={promoErrorValue}
              promoDepositText={promoDepositText}
            />
          </ErrorEmpty>
        </Box>

        {bonusInfo.activePendingBonuses.bonuses.length % 2 === 0 && <Box  bg="#eeeeee" h="1px" w="100%"/>}

        {getLink()}
      </div>
    )
  ) : <LoadingComponent t={t}/>
}
