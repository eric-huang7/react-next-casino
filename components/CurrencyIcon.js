import {Box} from "@chakra-ui/react"

const CurrencyIcon = ({id, size = 24, ...props}) => id
    ? <Box {...props}>
    <img src={`/assets/icons/currency/${id?.toLowerCase()}.svg`} width={size} height={size} alt=""/>
  </Box>
    : null

export default CurrencyIcon;
