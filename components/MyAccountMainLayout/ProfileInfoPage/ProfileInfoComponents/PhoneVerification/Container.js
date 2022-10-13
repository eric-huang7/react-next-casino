import {VStack} from "@chakra-ui/layout";

const Container = ({ children, minH = "144px", maxW = "402px",  ...props }) => (
  <VStack maxW={maxW} w="100%" minH={minH} borderRadius="5px" bg="#eeeeee" p="24px 17px 27px 20px"
    alignItems="flex-start" justifyContent="space-between" position="relative" {...props}
  >
    {children}
  </VStack>
)
export default Container;
