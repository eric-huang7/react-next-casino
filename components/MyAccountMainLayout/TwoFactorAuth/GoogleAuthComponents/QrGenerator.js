import QRCode from 'qrcode'
import { useEffect, useState } from 'react'

export const QrGenerator = ({ qrData }) => {
  const [src, setSrc] = useState('')

  useEffect(() => {
    QRCode.toDataURL(qrData).then((data) => {
      setSrc(data)
    })
    return () => {

    }
  }, [qrData])

  return (
    <div>
      <img src={src} alt="qr code image" width="160px" height="160px"/>
    </div>
  )
}


