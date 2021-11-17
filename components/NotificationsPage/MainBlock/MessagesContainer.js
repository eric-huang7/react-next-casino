import styles from '../../../styles/NotificationsPage/NotificationsPage.module.scss';
import {MessageItem} from "./MessageItem";

export const MessagesContainer = ({t, notifyData}) => {

  console.log(notifyData, '>>>>> notify container');

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
    console.log(arrOfMessages, 'date');

    return (
      <>
        {
          arrOfMessages.map((el) => {
            return (
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
            )
          })
        }
      </>
    )
  }

}