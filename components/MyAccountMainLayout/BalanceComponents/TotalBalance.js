import {useEffect, useState} from "react";
import { Text } from "@chakra-ui/react";
import {Box, HStack, Stack} from "@chakra-ui/layout";

const Label = ({children, ...props}) => <Text p={0} m={0} {...props}>{children}</Text>
const CryptoText = ({children, ...props}) => <Text fontSize="22px" fontWeight={600} {...props}>{children}</Text>
const FiatText = ({children, ...props}) => <Text fontSize="18px" fontWeight={700} color="#888" {...props}>
  {children}
</Text>

export const TotalBalance = ({ rates, rateUsd, currencies, t }) => {
  const [total, setTotal] = useState({crypto: 0, fiat: 0});

  useEffect(() => {
    if (rates && currencies) {
      const rateArr = [];
      let totalCrypto = 0;
      let totalFiat = 0;

      currencies.forEach(item => {
        const rate = rates[item.currency?.id];

        if (!isNaN(rate)) {
          const isFiat =  item.currency?.type === 3;
          const cryptoAmount =  parseFloat(item.current_balance) / rate;
          const fiatAmount = rateUsd * cryptoAmount;
          if (isFiat) {
            totalFiat += cryptoAmount
          } else {
            totalCrypto += cryptoAmount
          }

          rateArr.push({
            currency: item,
            rate,
            cryptoAmount,
            fiatAmount,
            isFiat
          })
        }
      })

      setTotal({
        cryptoBtc: totalCrypto.toFixed(8),
        cryptoUsd: rateUsd ? (totalCrypto * rateUsd).toFixed(2) : null,
        fiatBtc: totalFiat.toFixed(8),
        fiatUsd: rateUsd ? (totalFiat * rateUsd).toFixed(2) : null,
        totalBtc: (totalCrypto + totalFiat).toFixed(8),
        totalUsd: rateUsd ? ((totalCrypto + totalFiat) * rateUsd).toFixed(2) : null
      })
    }
  }, [rates, currencies, rateUsd]);

  return rateUsd && (
    <Stack direction={{base: "column", lg: "row"}} pb="30px" justifyContent="space-between" alignItems="flex-start"
           mx={{base: "25px", lg: 0}} spacing={{base: 4, lg: 2}}>
      <Box>
        <Label>{t('myAccount.balance.fiatAndSpotBalance')}</Label>
        <CryptoText>
          {total.totalBtc} BTC <FiatText>{total.totalUsd && <span>≈ {total.totalUsd} USD</span>}</FiatText>
        </CryptoText>
      </Box>
      <Box>
        <Label>{t('myAccount.balance.spotBalance')}</Label>
        <CryptoText>{total.cryptoBtc} BTC</CryptoText>
        {total.cryptoUsd && <FiatText>≈ {total.cryptoUsd} USD</FiatText>}
      </Box>
      <Box>
        <Label>{t('myAccount.balance.fiatBalance')}</Label>
        <CryptoText>{total.fiatBtc} BTC</CryptoText>
        {total.fiatUsd && <FiatText>≈ {total.fiatUsd} USD</FiatText>}
      </Box>
    </Stack>
  )
}
