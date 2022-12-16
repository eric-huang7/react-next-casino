import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import { HStack, Box, Image, chakra } from "@chakra-ui/react";
import {setLang} from "/redux/lang/action";
import {useCookies} from "react-cookie";
import {useRouter} from "next/router";
import Link from "next/link";
import {VStack} from "@chakra-ui/layout";

const LangSwitcher = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  let hrefRoute = router.route;

  const [cookies, setCookie, removeCookie] = useCookies(['language']);
  const activeLang = useSelector(({lang}) => lang.activeLang);
  const languages = useSelector(({lang}) => lang.languages);
  const [activeLangBlock, setActiveLangBlock] = useState(false);
  const [activeLangNow, setActiveLang] = useState({})

  useEffect(() => {
    let active = languages.find((el) => {
     return el.lang === activeLang;
    });
    setActiveLang(active);
  }, [languages, activeLang])

  const langChooser = (e) => {
    dispatch(setLang({lang: e.target.dataset.lang, setCookie} ));
  }

  return (
    <Box
      cursor="pointer"
      transition="right 0.5s ease-in-out"
      outline="none"
      position="relative"
      mr="10px"
      display={{base: 'none', lg: 'block'}}
      onMouseEnter={() => setActiveLangBlock(true)}
      onMouseLeave={() => setActiveLangBlock(false)}
    >
      <HStack w="111px" h="33px" border="1px solid" borderColor="grey.300" color="grey.300" textAlign="center"
              alignItems="center" justifyContent="center">
        {activeLangNow?.icon && <img src={activeLangNow?.icon} alt="flag icon"/>}
        <span>
          {activeLangNow?.language}
        </span>
      </HStack>

      {activeLangBlock && <VStack
        bg="grey.400"
        w="100%"
        m={0}
        p={0}
        alignItems="center"
        outline="none"
        position="absolute"
        top="0px"
        spacing={0}
      >
        {languages
          .map(language => (
            <HStack
              w="111px"
              h="31px"
              flexWrap="nowrap"
              alignItems="center"
              justifyContent="flex-start"
              pl="12px"
              pr="12px"
              spacing={0}
              key={language.name}
              onClick={(e) => langChooser(e)}
            >
              <Image src={language.icon} alt="" w="22px" mr="6px" />
              <Link
                href={{
                  pathname: hrefRoute,
                  query: {...router.query}
                }}
                locale={language.lang}
              >
                <chakra.a fontSize="11px" data-lang={language.lang}>
                  {language.language}
                </chakra.a>
              </Link>
            </HStack>
          ))}
      </VStack>}
    </Box>
  )
}


export default LangSwitcher;
