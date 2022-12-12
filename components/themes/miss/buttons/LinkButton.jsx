import {Button, Text} from "@chakra-ui/react";

const LinkButton = ({
  children, fontFamily = "Verdana", fontSize = 15, onClick, ...props
}) => (
  <Button
    variant="link"
    fontWeight={400}
    _hover={{fontDecoration: "none"}}
    onClick={onClick}
    fontSize={fontSize}
    color="primary.500"
    fontFamily={fontFamily}
    {...props}
  >
    {children}
  </Button>
)

export default LinkButton;
