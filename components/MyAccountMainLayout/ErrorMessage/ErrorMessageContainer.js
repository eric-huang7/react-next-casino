import { useDispatch } from 'react-redux'
import { errorPopupDeactivate } from '../../../redux/popups/action'
import BodyText from "../../typography/BodyText";
import {CloseIcon} from "@chakra-ui/icons";
import { HStack } from "@chakra-ui/react";

export const ErrorMessageContainer = ({ t, errorData }) => {
  const dispatch = useDispatch()
  const closeErrorPopup = () => {
    dispatch(errorPopupDeactivate())
  }

  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      position="fixed"
      minH="30px"
      w="80%"
      left="50%"
      bottom="30px"
      ml="-40%"
      p="5px 40px"
      bg="primary.500"
      zIndex={20}
      borderRadius="5px"
    >
      <BodyText color="white">{t(errorData.errorPopupData)}</BodyText>
      <CloseIcon color='white' cursor="pointer" onClick={closeErrorPopup} />
    </HStack>
  )
}
