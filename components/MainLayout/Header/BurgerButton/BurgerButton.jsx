import Image from 'next/image'
import styles from '../../../../styles/Header/BurgerButton.module.scss'



export const BurgerButton = () => {

  return (
    <div className={styles.burgerWrapper}>
      <Image
        src={'/assets/icons/burger_icon.svg'}
        alt="burgerMenu icon"
        width={'32px'}
        height={'24px'}
      />
    </div>
  )
}