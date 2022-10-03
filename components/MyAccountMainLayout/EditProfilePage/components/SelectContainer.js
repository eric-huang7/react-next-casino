import {FormControl, FormLabel, HStack, Box} from "@chakra-ui/react";

const SelectContainer = ({children, label, id, ...props}) => (
  <FormControl as={HStack} spacing={0} mb="45px" alignItems="flex-start" {...props}>
    <FormLabel htmlFor={id} w="180px" mr={0} fontSize="16px">{label}</FormLabel>

    <Box>
      {children}
    </Box>
  </FormControl>
)

export default SelectContainer;
