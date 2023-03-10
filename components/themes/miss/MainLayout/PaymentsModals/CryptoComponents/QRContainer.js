import { Box } from "@chakra-ui/react"
import QRCode from 'qrcode'
import { useEffect, useState } from 'react'
import Image from "next/image";

export const QRContainer = ({ qrData }) => {
  const [src, setSrc] = useState('')

  useEffect(() => {
    QRCode.toDataURL(qrData).then((data) => {
      setSrc(data)
    })
  }, [qrData])

  return (
    <Box
      w="96px"
      h="96px"
      border="1px solid rgba(43,47,46,0.11)"
    >
      {src && <Image width="94px" height="94px" src={src} alt=""/>}
    </Box>
  )
}
