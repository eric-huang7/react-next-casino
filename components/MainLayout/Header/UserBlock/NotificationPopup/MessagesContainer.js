import { MessageItem } from './MessageItem'
import ErrorEmpty from '../../../../ErrorBoundaryComponents/ErrorEmpty'

export const MessagesContainer = ({ notifyData }) => {

  let messages = []

  messages = notifyData.map((el) => {
    return (
      <ErrorEmpty key={`notification ${el.id}`}>
        <MessageItem
          key={`notification ${el.id}`}
          messageType={el.type}
          text={el.text}
          additionalText={el.text_additional}
          icon={el.image}
          link={el.link}
          time={el.time_created}
        />
      </ErrorEmpty>

    )
  })
  return (
    <>
      {
        messages
      }
    </>
  )
}