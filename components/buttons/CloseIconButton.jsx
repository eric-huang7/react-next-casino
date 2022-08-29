import {Box} from "@chakra-ui/layout";
import {CloseIcon} from "@chakra-ui/icons";

const CloseIconButton = ({top = "2px", right = "2px", dark = false, color = "white", onClick, ...props}) => (
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
    <CloseIcon size={20} color={color} />
  </Box>
)

export default CloseIconButton;
