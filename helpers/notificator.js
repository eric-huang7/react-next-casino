export function notificator (data) {

  if (Notification.permission === "granted") {
    let pushData = data.msg[0];
    let img = '/assets/icons/notifications/sound.svg';
    if (pushData.type === 'bonus') {
      img = '/assets/icons/notifications/diam.svg';
    } else if (pushData.type === 'redeem' || pushData.type === 'deposit' || pushData.type === 'withdraw') {
      img = '/assets/icons/notifications/wallet.svg';
    } else if (pushData.type === 'freespins') {
      img = '/assets/icons/notifications/arr.svg';
    } else if (pushData.type === 'tournaments') {
      img = '/assets/icons/notifications/cup.svg';
    } else {
      img = '/assets/icons/notifications/sound.svg';
    }
    let text = pushData.text;
    let notify = new Notification('New notify', {body: text, icon: img});
  }
}