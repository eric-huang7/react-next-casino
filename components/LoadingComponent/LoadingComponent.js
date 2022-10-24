import {keyframes} from "@chakra-ui/react";
import {Box, Text, HStack} from "@chakra-ui/layout";

const pulse1 = keyframes`
  0% {background-color: #96d399;}
  16% {background-color: #47b14c;}
  32% {background-color: #47b14c;}
  48% {background-color: #96d399;}
  64% {background-color: #96d399;}
  80% {background-color: #96d399;}
  100% {background-color: #96d399;}
`;
const pulse2 = keyframes`
  0% {background-color: #96d399;}
  16% {background-color: #96d399;}
  32% {background-color: #47b14c;}
  48% {background-color: #47b14c;}
  64% {background-color: #96d399;}
  80% {background-color: #96d399;}
  100% {background-color: #96d399;}
`;
const pulse3 = keyframes`
  0% {background-color: #96d399;}
  16% {background-color: #96d399;}
  32% {background-color: #96d399;}
  48% {background-color: #47b14c;}
  64% {background-color: #47b14c;}
  80% {background-color: #96d399;}
  100% {background-color: #96d399;}
`;
const pulse4 = keyframes`
  0% {background-color: #96d399;}
  16% {background-color: #96d399;}
  32% {background-color: #96d399;}
  48% {background-color: #96d399;}
  64% {background-color: #47b14c;}
  80% {background-color: #47b14c;}
  100% {background-color: #96d399;}
`;

const Item = ({pulse}) => (
  <Box
    w="25px"
    h="25px"
    borderRadius="50%"
    backgroundColor="primary.400"
    animation={`${pulse} 1s ease-in-out 0s infinite alternate-reverse`}
  />
)
export const LoadingComponent = ({t, text, height = "300px", ...props}) => (
  <>
    <HStack h={height} w="150px" alignItems="center" justifyContent="space-around" m="0 auto" {...props}>
      <Item pulse={pulse1} />
      <Item pulse={pulse2} />
      <Item pulse={pulse3} />
      <Item pulse={pulse4} />
    </HStack>
    <Text mt={0} mb="40px" color="grey.400" fontFamily="Arial" fontSize="16px">
      {t(text)}
    </Text>
  </>
)
