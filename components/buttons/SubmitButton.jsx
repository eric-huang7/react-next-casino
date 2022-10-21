import {Button, Text} from "@chakra-ui/react";

const SubmitButton = ({
  title, type = 'submit', height = '54px', width = "100%", fontWeight= 500, bg = "primary.500", form, onClick,
  fontFamily = "Montserrat"
}) => (
  <Button
    onClick={onClick}
    type={type}
    form={form}
    w={width}
    h={height}
    bg={bg}
    borderRadius="12px"
    border="0px solid white"
    _hover={{ bg: bg }}
  >
    <Text casing="uppercase" fontSize={{base: 16, lg: 20}} color="white"
          fontWeight={fontWeight} fontFamily={fontFamily} whiteSpace="pre-line">
      {title}
    </Text>
  </Button>
)

export default SubmitButton;
