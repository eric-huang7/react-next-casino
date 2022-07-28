import {HStack, VStack} from "@chakra-ui/react"
import {Timer} from './Timer'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {setActiveTournaments} from '../../../../redux/tournaments/action'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'
import {Button} from "@chakra-ui/button";
import {Text} from "@chakra-ui/layout";
import {showDepositModal, showTournaments} from "../../../../redux/popups/action";
import {showRegister} from "../../../../redux/ui/action";

const CustomButton = ({children, ...props}) => <Button
  px="24px"
  h="24px"
  borderRadius="10px"
  border="none"
  bg="grey.200"
  fontSize="13px"
  fontWeight={400}
  color="primary.500"
  fontFamily="Verdana"
  {...props}
>{children}</Button>

export const ButtonsBlock = ({t, tournaments, sliderPosition, router, userInfo, showDetails}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (tournaments.tournaments && tournaments?.tournaments?.results) {
      dispatch(setActiveTournaments(tournaments?.tournaments?.results[sliderPosition]))
    }

  }, [sliderPosition, tournaments.tournaments])

  const showDepositsHandler = () => {
    if (userInfo.isAuthenticated) {
      dispatch(showDepositModal(true))
    } else {
      dispatch(showRegister(true))
    }

    dispatch(showTournaments(false))
  }

  if (tournaments.loadingTournaments) return null;

  return tournaments?.tournaments?.results?.length > 0 ? (
    <VStack w="100%" h="90px" spacing={0} bg="rgba(255, 255, 255, 0.1)">
      <HStack w="100%" alignItems="center" justifyContent="space-between" p="15px 16px 18px 16px">
        <ErrorEmpty>
          <Timer
            t={t}
            time={Number(tournaments?.tournaments?.results[sliderPosition]?.time_finished)}
            router={router}
          />
        </ErrorEmpty>
        <CustomButton
          onClick={showDetails}
        >
          {t('tournaments.buttons.details')}
        </CustomButton>
      </HStack>
      <HStack w="100%" alignItems="center" justifyContent="center">
        <CustomButton
          onClick={showDepositsHandler}
          bg="primary.500"
          _hover={{bg: "primary.500"}}
          color="white"
          textTransform="uppercase"
          h="27px"
        >
          {userInfo.isAuthenticated ? t('tournaments.buttons.deposit') : t('tournaments.buttons.signUp')}
        </CustomButton>
      </HStack>
    </VStack>
  ) : <HStack w="100%" alignItems="center" justifyContent="center" bg="grey.900" h="100px" pb="16px"
  >
    <Text color="white" fontFamily="Lithograph">{t('homePage.checkLater')}</Text>
  </HStack>

}
