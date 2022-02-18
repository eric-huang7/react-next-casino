import {MessageItem} from "./MessageItem";
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'

export const MessagesContainer = ({t, notifyData}) => {



  if (notifyData.loading) {
    return (
      <h1 className={"loadingHeader"}>LOADING .....</h1>
    )
  } else {
    let arrOfMessages = notifyData.messagesData.filter((el) => {
      if (el.active === 1 || (Math.trunc(Number(el.time_expired) * 1000)) > Date.now()) {
        return true;
      } else {
        return false;
      }
    });


    return (
      <>
        {
          arrOfMessages.map((el) => {
            return (
              <ErrorEmpty key={`${el.id} message key`}>
                <MessageItem
                  key={`${el.id} message key`}
                  link={el.link}
                  messageType={el.type}
                  icon={el.image}
                  text={el.text}
                  additionalText={el.text_additional}
                  time={el.time_created}
                  read={el.read}
                />
              </ErrorEmpty>
            )
          })
        }
      </>
    )
  }

}