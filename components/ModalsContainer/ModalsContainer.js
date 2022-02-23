import { MessageContainer } from '../MessageContainer/MessageContainer'
import { useSelector } from 'react-redux'

export const ModalsContainer = ({token, emailError, withdrawConfirmError}) => {
  const isShowModal = useSelector((store) => store.showPopupsReducer)

  return (
    <>
      {
        isShowModal.showMessagePopup && <MessageContainer />
      }

    </>
  )
}