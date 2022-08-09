import Link from 'next/link'
import {useDispatch, useSelector} from "react-redux";
import { useRouter } from 'next/router';
import { Text, VStack, HStack } from '@chakra-ui/react';
import {setLang} from "../../../redux/lang/action";
import {useCookies} from "react-cookie";
import {Box} from "@chakra-ui/layout";

export const ChooseLangDropdown = ({t, isVis}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(['language']);
  const languages = useSelector(({lang}) => lang.languages);

  const langChooser = (lang) => {
    dispatch(setLang({lang, setCookie}));
  }

  return (
    <Box
      position="absolute"
      height="125px"
      bg="white"
      zIndex={10}
      overflowY="scroll"
      top="-126px"
      left="-1px"
      w="100%"
    >
      <VStack alignItems="center" p="10px">
        {
          languages?.map((language) => {
            return (
              <HStack
                mt="10px"
                cursor="pointer"
                w="100%"
                alignItems="center"
                justifyContent="center"
                key={language.name}
                onClick={(e) => langChooser(e?.target?.dataset?.lang)}
              >
                <Link
                  href={{
                    pathname: router.route,
                    query: {...router.query}
                  }}
                  locale={language.lang}
                >
                  <a data-lang={language.lang}>
                    <Text color="black" textTransform="uppercase" fontSize={{base: "14px", lg: "16px"}}>
                      {language.language}
                    </Text>
                  </a>
                </Link>
              </HStack>
            )
          })
        }
      </VStack>
    </Box>
  )
}
