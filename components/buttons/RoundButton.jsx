import {Text} from "@chakra-ui/react";
import PrimaryButton from "./PrimaryButton";

const RoundButton = ({title, w = "121px", h = "34px", solid, onClick, fontFamily = "Myriad Pro",
  fontSize = {base: 14, lg: 18}, ...props
}) => (
  <PrimaryButton
    onClick={onClick}
    bg={solid ? "primary.500" : "#eee"}
    minH={h}
    minW={w}
    h="fit-content"
    w="fit-content"
    border="1px solid"
    borderColor={solid ? "primary.500" : "#9e9e9e"}
    borderRadius="17px"
    _hover={{ bg: solid ? "primary.500" : "#eee" }}
    {...props}
  >
    <Text casing="none" fontSize={fontSize} color={solid ? "white" : "#747272"}
          fontFamily={fontFamily} whiteSpace="pre-line">
      {title}
    </Text>
  </PrimaryButton>
)

export default RoundButton;
