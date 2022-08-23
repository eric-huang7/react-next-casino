import { NotifyHeader } from './NotifyHeader'
import { MessagesContainer } from './MessagesContainer'
import { useSelector } from 'react-redux'
import {Box} from '@chakra-ui/react'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'

export const MainBlockContainer = ({ t,notifyData }) => {
  const subscriptInfo = useSelector((store) => store.userSubscriptions.notifySubscribe)

  return (
    <Box w={{base: '100%', lg: '995px'}} minH={{base: 0, lg: '780px'}} bg="black" flexShrink={1}>
      <ErrorEmpty>
        <NotifyHeader subscriptInfo={subscriptInfo} notifyData={notifyData} t={t}/>
      </ErrorEmpty>
      <Box h="100%" overflowY={{base: "scroll", lg: "inherit"}}>
        <ErrorText>
          <MessagesContainer notifyData={notifyData} t={t}/>
        </ErrorText>
      </Box>
    </Box>
  )
}
