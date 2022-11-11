import { useDispatch, useSelector } from 'react-redux'
import { HStack } from "@chakra-ui/react"
import { messagePopupDeactivate } from '../../redux/popups/action'
import { MessageTextContainer } from './MessageTextContainer'
import CloseIconButton from "../buttons/CloseIconButton";

export const MessageContainer = () => {
  const dispatch = useDispatch()
  const popupData = useSelector((store) => store.popups)

  const closeMessagePopup = () => {
    dispatch(messagePopupDeactivate())
  }

  return (
    <HStack
      sx={{
        bg: popupData?.messagePopupData?.color,
        '& a': {textDecoration: "underline"},
        '& a:hover': {color: "#d5d5d5"},
      }}
      position="fixed"
      top="20px"
      right="20px"
      minW="350px"
      maxW="400px"
      alignItems="flex-start"
      flexWrap="nowrap"
      zIndex={30}
      bg="primary.500"
      borderRadius="10px"
      border="2px solid #fff"
      p="0 10px"
      fontSize="14px"
      fontFamily="Verdana"
      color="white"
    >
      <MessageTextContainer messageType={popupData?.messagePopupData?.data}/>
      <CloseIconButton onClick={closeMessagePopup}/>
    </HStack>
  )
}
