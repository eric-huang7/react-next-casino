import styles from '../../styles/MobileSideMenu/MobileSideMenu.module.scss';

export const MobileSideButtons = ({t, buttonData, shouldDo}) => {
  return (
    <a onClick={(e) => shouldDo(e)}>{t(buttonData.name)}</a>
  )
}