import {VStack} from "@chakra-ui/layout";

const Container = ({ children, ...props }) => (
  <VStack maxW="402px" w="100%" minH="144px" borderRadius="5px" bg="#eeeeee" p="24px 17px 27px 20px"
    alignItems="flex-start" justifyContent="space-between" position="relative" {...props}
  >
    {children}
  </VStack>
)
export default Container;
