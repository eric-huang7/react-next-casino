import {MessageItem} from "./MessageItem";
import styles from "../../../../../styles/NotificationPopup/NotificationPopup.module.scss";


export const MessagesContainer = ({notifyData}) => {
  let noMessage = [{type: "no_messages", text: "No messages"}];
  let messages = [];
  if (notifyData.length > 0) {
    messages = notifyData.map((el, ind) => {
      return (
        <MessageItem
          key={`notification ${el.id}`}
          messageType={el.type}
          text={el.text}
          additionalText={el.text_additional}
          icon={el.image}
          link={el.link}
          time={el.time_created}
        />
      )
    })

  } else {
    messages = noMessage.map((el) => {
      return (
        <div key={'no message'} className={styles.messageItemWrapper}>
          <p className={styles.noNotifications}>no notifications</p>
        </div>
      )
    })
  }


  return (
    <>
      {
        messages
      }
    </>
  )
}