import Link from 'next/link'
import { Text, Box, chakra } from "@chakra-ui/react"

export const AvailableToCashoutBlock = ({ t, balanceData, typeOfCurrency }) => {
  let balance = balanceData.filter((el) => Number(el.currency_id) === typeOfCurrency.id)[0]

  return (
    <Box borderRadius="5px" bg="primary.500" p="11px 17px" mb="42px">
      {balance && <Text m={0} fontSize="14px" color="white" fontFamily="Verdana">
        {t('myAccount.cashoutPage.availableTo', { value: `${Number(balance.cash_amount)} ${typeOfCurrency.abbreviation}` })}
        {' '}
        <Link
            href={'/accounts/balance'}>
            <chakra.a textDecoration="underline" cursor="pointer">{t('myAccount.cashoutPage.balance')}</chakra.a>
          </Link> {t('myAccount.cashoutPage.pageDetailed')}
        </Text>
      }
    </Box>
  )
}
