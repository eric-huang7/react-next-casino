import {Button, Text} from "@chakra-ui/react";

const SubmitButton = ({
  title, type = 'submit', height = '75px', width = "100%", bg = "primary.500", form, onClick
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
    <Text casing="uppercase" fontSize={18} color="white" fontFamily="Myriad Pro">
      {title}
    </Text>
  </Button>
)

export default SubmitButton;
