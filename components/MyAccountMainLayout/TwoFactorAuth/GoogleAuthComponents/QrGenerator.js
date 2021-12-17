import styles from '../../../../styles/MyAccount/UserInfoPage/TwoFactorAuthPage.module.scss';
import QRCode from 'qrcode';
import {useEffect, useState} from "react";


export const QrGenerator = ({qrData}) => {
  const [src, setSrc] = useState('')

  useEffect(() => {
    QRCode.toDataURL(qrData).then((data) => {
      setSrc(data);
    })
  },[qrData])

  return (
    <div className={styles.qrImageContainer}>
      <img src={src} alt="qr code image" className={styles.qrCodeImage}/>
    </div>
  )
}


