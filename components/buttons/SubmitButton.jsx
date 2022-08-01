import {Button, Text} from "@chakra-ui/react";

const SubmitButton = ({
  title, type = 'submit', height = '75px', width = "100%", bg = "primary.500", form, onClick, fontFamily = "Myriad Pro"
}) => (
  <Button
    onClick={onClick}
    type={type}
    form={form}
    w={width}
    h={height}
    bg={bg}
    borderRadius="15px"
    border="4px solid white"
    _hover={{ bg: bg }}
  >
    <Text casing="uppercase" fontSize={{base: 16, lg: 18}} color="white" fontFamily={fontFamily} whiteSpace="pre-line">
      {title}
    </Text>
  </Button>
)

export default SubmitButton;
