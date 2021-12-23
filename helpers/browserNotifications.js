
function checkNotificationPromise() {
  try {
    Notification.requestPermission().then();
  } catch(e) {
    return false;
  }

  return true;
}

export function browserNotifications() {
  let res = null;

  function handlePermission(permission) {
    // set the button to shown or hidden, depending on what the user answers
    if(Notification.permission === 'denied' || Notification.permission === 'default') {
      console.log('cant send notify', permission);
    } else {
      console.log('may send notify', permission);
    }
  }


  if (!('Notification' in window)) {
    console.log("This browser does not support notifications.");
  } else {
    if(checkNotificationPromise()) {
      Notification.requestPermission()
        .then((permission) => {
          console.log('may send notify', permission);
          handlePermission(permission);
        })
    } else {
      Notification.requestPermission(function(permission) {
        console.log('may send notify', permission);
        handlePermission(permission);
      });
    }
  }
}

