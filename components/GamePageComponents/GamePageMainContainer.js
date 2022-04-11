import styles from '../../styles/GamePage/GamePage.module.scss';
import {Background} from "./Background";
import {PlayWindowWrapper} from "./PlayWindowWrapper";
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {minimizeGameWindow} from "../../redux/ui/action";
import {Header} from "../MainLayout/Header/Header";


export const GamePageMainContainer = ({t}) => {



  return (
    <>
      <section  className={`${styles.gamePageMainSection}`}>
        <Background
        />
      </section>
    </>

  )
}
