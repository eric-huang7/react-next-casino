import {Box} from "@chakra-ui/layout";

const ArrowButton = ({direction = 'prev', round = false, display = false, ...props}) => (
  <Box
    backgroundColor="rgba(0,0,0, 0.5) !important"
    backgroundRepeat="no-repeat"
    backgroundPosition="center"
    backgroundSize="46px 46px"
    cursor="pointer"
    position="absolute"
    zIndex={1}
    content=''
    w="46px"
    h="100%"
    top="0"
    opacity={display ? 0.5 : 0}
    right={direction === 'next' && "0"}
    left={direction === 'prev' && "0"}
    backgroundImage={`url('/assets/img/gamesSlider/arrow-${direction === 'prev' ? 'left' : 'right'}.svg')`}
    borderTopLeftRadius={round && direction === 'next' && "0.25rem"}
    borderBottomLeftRadius={round && direction === 'next' && "0.25rem"}
    borderTopRightRadius={round && direction === 'prev' && "0.25rem"}
    borderBottomRightRadius={round && direction === 'prev' && "0.25rem"}
    _hover={{
      opacity: 1,
      transition: 'opacity 200ms ease'
    }}
    {...props}
  />
)

export default ArrowButton;
