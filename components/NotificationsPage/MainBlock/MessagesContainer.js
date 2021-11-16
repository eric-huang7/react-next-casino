import styles from '../../../styles/NotificationsPage/NotificationsPage.module.scss';
import {MessageItem} from "./MessageItem";

export const MessagesContainer = () => {

  return (
    <>
      <MessageItem link={'asd'} messageType={'bonus'} icon={''} text={'SOmebonus sdfsd sdf sdfas fwerwe rwdfsd fsadf sdf sf xc z vcasd qw '} additionalText={''} time={"1636983390.549609"}/>
      <MessageItem link={'asd'} messageType={'bonus'} icon={''} link={'xcvx dfcvdas dasdas'} text={'SOmebonus sdfsd sdf sdfas fwerwe rwdfsd fsadf sdf sf xc z vcasd qw '} additionalText={'dfgsdgdsfsdfsdfsdfsdfsdf'} time={"1636983390.549609"}/>
      <MessageItem link={'asd'} messageType={'bonus'} icon={''} text={'SOmebonus asd qw '} additionalText={''} time={"1636983390.549609"}/>
    </>
  )
}