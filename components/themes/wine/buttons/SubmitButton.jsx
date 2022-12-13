import {Button, Text} from "@chakra-ui/react";

const SubmitButton = ({
  title, type = 'submit', height = {base: '51px', lg: '93px'}, width = "100%", fontWeight= 500, bg = "primary.500",
  form, onClick, fontFamily = "Trebuchet"
}) => (
  <Button
    onClick={onClick}
    type={type}
    form={form}
    w={width}
    h={height}
    bg={bg}
    borderRadius="13px"
    border="0px solid white"
    _hover={{ bg: bg }}
  >
    <Text casing="uppercase" fontSize={{base: 16, lg: 18}} color="white"
          fontWeight={fontWeight} fontFamily={fontFamily} whiteSpace="pre-line">
      {title}
    </Text>
  </Button>
)

export default SubmitButton;
