import { Box } from "@chakra-ui/react";

const Bg = (props) => <Box
  position="absolute"
  w="550px"
  h="550px"
  backgroundRepeat="no-repeat"
  backgroundSize="100%"
  zIndex={1}
  {...props}
/>

const RedBg = (props) => <Bg
  bgGradient="radial-gradient(circle, rgba(187,0,0,0.2623249983587185) 2%, rgba(187,0,0,0.2623249983587185) 8%, rgba(255,255,255,0) 78%)"
  {...props}
/>

const BlueBg = (props) => <Bg
  bgGradient="radial-gradient(circle, rgba(1,0,187,0.2023249983587185) 2%, rgba(1,0,187,0.2023249983587185) 8%, rgba(255,255,255,0) 78%)"
  {...props}
/>

const BlackBg = (props) => <Bg bg="rgba(0,0,0,0.3)" w="100%" h="100%" zIndex={2} {...props} />

export const Background = () => (
  <>
    <RedBg sx={{top: "-100px", right: "100px"}} />
    <RedBg sx={{top: "-300px", right: "200px"}} />
    <RedBg sx={{top: "50px", left: "200px"}} />
    <BlueBg sx={{top: "-250px", left: "100px"}} />
    <BlueBg sx={{top: "-300px", left: "-200px"}} />
    <BlueBg sx={{top: "0", right: "400px"}} />
    <BlackBg />
  </>
)
