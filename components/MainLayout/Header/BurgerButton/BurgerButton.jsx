import Image from 'next/image'
import styles from '../../../../styles/Header/BurgerButton.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {showMobileMenu} from "../../../../redux/actions/sideMobileMenuShow";



export const BurgerButton = () => {
  const dispatch = useDispatch();
  const isShowMobileMenu = useSelector((state) => state.showMobileMenu.isShow);

  const burgerClickHandler = () => {
    if (isShowMobileMenu) {
      dispatch(showMobileMenu(false));
    } else {
      dispatch(showMobileMenu(true));
    }
  }

  return (
    <div
      className={styles.burgerWrapper}
      onClick={() => burgerClickHandler()}
    >
      <Image
        src={'/assets/icons/burger_icon.svg'}
        alt="burgerMenu icon"
        width={'32px'}
        height={'24px'}
      />
    </div>
  )
}