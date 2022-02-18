import {MessageItem} from "./MessageItem";
import ErrorEmpty from "../../../../ErrorBoundaryComponents/ErrorEmpty";


export const MessagesContainer = ({notifyData, t}) => {
  let noMessage = [{type: "no_messages", text: "No messages"}];
  let messages = [];

    messages = notifyData.map((el, ind) => {
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
            t={t}
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