

export const NotifyIcon = ({soundClickHandler, notifySubscript}) => {


  return (
    <>
      <img onClick={() => soundClickHandler()} src={`/assets/icons/notifications/${notifySubscript === 1 ? 'sound_on.svg' : 'sound_off.svg'}`} alt="notification sound icon"/>
    </>
  )
}