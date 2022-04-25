import styles from "../../../styles/MobileSideMenu/MobileSideMenu.module.scss";
import Image from "next/image";


export const SideMenuLogo = () => {

  return (
    <div className={styles.sideMenuLogo}>
      <Image src={'/assets/img/mainLayoutImg/logo.webp'} width={102} height={55} alt={'logo'}/>
    </div>
  )
}
