import {Box} from "@chakra-ui/layout";

const CloseButton = ({top = "13px", right = "13px", dark = false, onClick, ...props}) => (
  <Box
    position="absolute"
    top={top}
    right={right}
    cursor="pointer"
    w="20px"
    h="20px"
    onClick={onClick}
    {...props}
  >
    <img src={`/assets/icons/close-icon${dark ? '-dark' : ''}.svg`} alt=""/>
  </Box>
)

export default CloseButton;
