import {Box} from "@chakra-ui/layout";
import React from "react";
import {useMediaQuery} from "@chakra-ui/media-query";
import {keyframes} from "@chakra-ui/react";

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const animation = `${pulse} 1.5s ease-in-out 0.5s infinite`

const LoadingItems = ({height = {base: "125px", lg: "160px"}, width = {base: "160px", lg: "235px"}}) => {
  const [isMobile] = useMediaQuery('(max-width: 30em)')

  return (isMobile ? [0,1] : [0,1,2,3,4]).map(key => (
    <Box m={{base: "5px !important", lg: "10px !important"}} key={key}
         bg="rgba(0, 0, 0, 0.21)"
         borderRadius="0.25rem"
         h={height}
         w={width}
         animation={animation}
    />
  ))
}
export default LoadingItems;
