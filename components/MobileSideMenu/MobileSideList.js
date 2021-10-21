import styles from '../../styles/MobileSideMenu/MobileSideMenu.module.scss';
import Link from "next/link";
import {useDispatch} from "react-redux";
import {showMobileMenu} from "../../redux/actions/sideMobileMenuShow";

export const MobileSideListLinks = ({t, dataList}) => {
  const dispatch = useDispatch();

  function clickLincksCloseMenu() {
    dispatch(showMobileMenu(false));
  }

  if(dataList.type === "link") {
    return (
      <>
        {dataList.icon ? <img src={dataList.icon} alt='side menu icon'/> : ""}
        <Link href={dataList.path}>
          <a onClick={() => clickLincksCloseMenu()}>{t(dataList.name)}</a>
        </Link>
      </>
    )
  } else {

  }

}