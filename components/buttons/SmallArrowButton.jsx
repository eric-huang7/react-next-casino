import {Box} from "@chakra-ui/layout";

const SmallArrowButton = ({direction = 'prev', round = true, ...props}) => (
  <Box
    backgroundRepeat="no-repeat"
    backgroundPosition="center"

    cursor="pointer"
    position="absolute"
    zIndex={1}
    content=''
    w="60px"
    h="50px"
    top="103.6%"
    bottom={0}
    opacity={0.5}
    border='1px solid white'
    transform={direction === 'next' ? 'rotateZ(180deg)': ''}
    right={direction === 'next' && {base: "20%", lg: "37%"}}
    left={direction === 'prev' && {base: "20%", lg: "37%"}}
    backgroundImage="url('/assets/img/gamesSlider/controllArrow.svg')"
    // borderTopLeftRadius={round && direction === 'next' && "0.25rem"}
    // borderBottomLeftRadius={round && direction === 'next' && "0.25rem"}
    borderTopLeftRadius={"0.25rem"}
    borderBottomLeftRadius={"0.25rem"}

    _hover={{
      opacity: 1,
      transition: 'opacity 200ms ease'
    }}
    {...props}
  />
)

export default SmallArrowButton;
