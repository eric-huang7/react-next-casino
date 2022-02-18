export const messageStyle = (messageType) => {
  let messageIcon = '';
  let colorOfLink = '';

  if (messageType === 'bonus') {
    messageIcon = '/assets/icons/notifications/diam.svg'
    colorOfLink = '#47b14c'
  } else if (messageType === 'redeem' || messageType === 'deposit' || messageType === 'withdraw') {
    messageIcon = '/assets/icons/notifications/wallet.svg'
    colorOfLink = '#ef9b92'
  } else if (messageType === 'freespins') {
    messageIcon = '/assets/icons/notifications/arr.svg'
    colorOfLink = '#ef9b92'
  } else if (messageType === 'tournaments') {
    messageIcon = '/assets/icons/notifications/cup.svg'
    colorOfLink = '#ef9b92'
  } else {
    messageIcon = '/assets/icons/notifications/sound.svg'
    colorOfLink = '#ef9b92'
  }

  return {
    messageIcon : messageIcon,
    colorOfLink : colorOfLink
  }
}