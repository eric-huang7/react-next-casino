import styles from '../../styles/MobileSideMenu/MobileSideMenu.module.scss';
import Link from "next/link";
import {useDispatch} from "react-redux";
import {showMobileMenu} from "../../redux/actions/sideMobileMenuShow";


export const MobileSideListLinks = ({t, dataList, messages}) => {
  const dispatch = useDispatch();

  function clickLinksCloseMenu() {
    dispatch(showMobileMenu(false));
  }

  if(dataList.type === "link") {
    return (
      <>
        {dataList.icon ? <img src={dataList.icon} alt='side menu icon'/> : ""}
        <Link href={dataList.path}>
          <a onClick={() => clickLinksCloseMenu()}>{t(dataList.name)}</a>
        </Link>
        {(messages && messages.length > 0) ? <p className={styles.mobileSideListItemMessagesCounter}>{messages.length}</p> : ''}
      </>
    )
  } else {

  }

}