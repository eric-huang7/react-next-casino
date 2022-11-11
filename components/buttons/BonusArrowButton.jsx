import {Box} from "@chakra-ui/layout";

const BonusArrowButton = ({direction = 'prev', round = false, display = false, ...props}) => (
  <Box
    cursor="pointer"
    position="absolute"
    zIndex={1}
    content=''
    w="120px"
    h="100%"
    top="0"
    right={direction === 'next' && "0"}
    left={direction === 'prev' && "0"}
    borderTopLeftRadius={round && direction === 'next' && "12px"}
    borderBottomLeftRadius={round && direction === 'next' && "12px"}
    borderTopRightRadius={round && direction === 'prev' && "12px"}
    borderBottomRightRadius={round && direction === 'prev' && "12px"}
    background={`linear-gradient(${direction === 'prev' ? 90 : 270}deg, #3A1912 0%, rgba(58, 18, 18, 0.7) 100%)`}
    display="flex"
    justifyContent={direction === 'prev' ? 'flex-start' : 'flex-end'}
    alignItems='center'
    px="20px"
    {...props}
  >
    <Box
      w="40px"
      h="40px"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="12px 12px"
      borderRadius="20px"
      backgroundColor="#2B0C06"
      backgroundImage={`url('/assets/icons/deposit/arrow-${direction === 'prev' ? 'left' : 'right'}-icon.svg')`} />
  </Box>
)

export default BonusArrowButton;
