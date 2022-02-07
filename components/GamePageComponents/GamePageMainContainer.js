import styles from '../../styles/GamePage/GamePage.module.scss';
import {Background} from "./Background";
// import {PlayWindowWrapper} from "./PlayWindowWrapper";
import {useState} from "react";


export const GamePageMainContainer = ({t}) => {




  return (
    <section className={styles.gamePageMainSection}>
      <Background />
    </section>
  )
}