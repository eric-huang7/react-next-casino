import {Box, chakra} from "@chakra-ui/react"

const CurrencyIcon = ({id, size = 6, ...props}) => id
  ? <Box {...props}>
    <chakra.img src={`/assets/icons/currency/${id?.toLowerCase()}.svg`} w={size} h={size} maxW={size} alt="" />
  </Box>
  : null

export default CurrencyIcon;
