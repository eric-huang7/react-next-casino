import {Button, Input, Text} from "@chakra-ui/react";
import {Box} from "@chakra-ui/layout";

const LinkButton = ({
  children, fontFamily = "Verdana", fontSize = 15, onClick, align = "flex-start", ...props
}) => (
  <Box
    w="100%"
    fontWeight={400}
    height="51px"
    display="flex"
    alignItems="center"
    justifyContent={align}
    border="1px solid"
    borderColor="grey.300"
    borderRadius={0}
    bg="grey.100"
    px={4}
    onClick={onClick}
    fontSize={fontSize}
    fontFamily={fontFamily}
    cursor="pointer"
    {...props}
  >
    {children}
  </Box>
)

export default LinkButton;
