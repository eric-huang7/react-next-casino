import styles from '../../../styles/MyAccount/BetsHistory/BetsHistory.module.scss'
import { Heading } from '../ComponentsForPages/Heading'
import { TrxHistoryLinksContainer } from '../TrxHistory/TrxHistoryLinksContainer'
import { BetsHistoryTableContainer } from './BetsHistoryTableContainer'
import { useSelector } from 'react-redux'
import { Box, Text } from "@chakra-ui/react"
import { LoadingComponent } from '../../LoadingComponent/LoadingComponent'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'

export const BetsHistory = ({ t, router }) => {
  const userInfo = useSelector((store) => store.authInfo)

  if (!userInfo.loadingUserBetsData) {
    return (
      <div className={styles.mainContainer}>
        <Heading t={t} heading={'myAccount.pageHeadings.betHistory'}/>
        <TrxHistoryLinksContainer t={t} router={router}/>

        <Box py="34px">
          <Text>{t("myAccount.history.bets.textBlock")}</Text>
        </Box>

        <ErrorText>
          <BetsHistoryTableContainer betsData={userInfo.userBetsData} t={t}/>
        </ErrorText>
      </div>
    )
  } else {
    return (
      <div className={styles.mainContainer}>
        <Heading t={t} heading={'myAccount.pageHeadings.betHistory'}/>
        <LoadingComponent t={t}/>
      </div>
    )
  }

}
