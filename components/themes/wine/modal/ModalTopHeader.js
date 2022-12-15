import {Box, Text} from "@chakra-ui/layout";
import {useRouter} from "next/router";

const ModalTopHeader = ({
  width = '430px', title, subtitle, fontSize = {base: "24px", lg: "44px"}, top = {base: "0", lg: "0"}
}) => {
  const router = useRouter();

  return (
    <Box
      position="absolute"
      top={top}
      left={{base: 0, lg: `calc((${width} - 70vw) / 2)`, xl: `calc((${width} - 60vw) / 2)`}}
      width={{base: "100%", lg: '70vw', xl: '60vw'}}
    >
      <Text
        as="div"
        fontFamily="Trebuchet"
        color="white"
        fontSize={fontSize}
        lineHeight={fontSize}
        fontWeight={300}
        letterSpacing="1px"
        textTransform="uppercase"
        textAlign="center"
      >
        {title}
      </Text>
      {subtitle && <Text
        as="div"
        fontFamily="Montserrat"
        color="white"
        fontSize={fontSize}
        lineHeight={fontSize}
        fontWeight={500}
        letterSpacing="1px"
        textTransform="uppercase"
        textAlign="center"
      >
        {subtitle}
      </Text>}
    </Box>
  )
}

export default ModalTopHeader;
