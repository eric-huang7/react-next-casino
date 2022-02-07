import styles from '../../styles/GamePage/GamePage.module.scss';
import {Background} from "./Background";
import {PlayWindowWrapper} from "./PlayWindowWrapper";


export const GamePageMainContainer = ({t}) => {


  return (
    <section className={styles.gamePageMainSection}>
      <Background />
      <PlayWindowWrapper />
    </section>
  )
}