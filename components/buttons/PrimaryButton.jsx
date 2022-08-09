import {Button, Text} from "@chakra-ui/react";

const PrimaryButton = ({
   title, height = '55px', width = "100%", bg = "primary.500", onClick, fontFamily = "Myriad Pro",
   fontSize = {base: 16, lg: 18}, fontWeight = 400, children, ...props
}) => (
  <Button
    onClick={onClick}
    w={width}
    h={height}
    bg={bg}
    borderRadius="8px"
    _hover={{bg: bg}}
    color="white"
    textTransform="uppercase"
    fontSize={fontSize}
    fontWeight={fontWeight}
    fontFamily={fontFamily}
    whiteSpace="pre-line"
    {...props}
  >
    {children ?? <Text>{title}</Text>}
  </Button>
)

export default PrimaryButton;
