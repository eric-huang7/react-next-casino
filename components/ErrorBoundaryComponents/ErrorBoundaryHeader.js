import React from "react";
import {logErrorToMyService} from "../../helpers/errorLoger";
import Link from "next/link";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import {HStack} from "@chakra-ui/layout";
import {Image} from "@chakra-ui/react";

class ErrorHeaderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }

  componentDidCatch(error, errorInfo) {
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError || true) {
      return (
        <HStack
          position="relative"
          h={{base: "53px", lg: "85px"}}
          justifyContent="space-between"
          alignItems="center"
          backgroundColor="accent.850"
          backgroundImage='url("/assets/img/mainLayoutImg/header_bg.webp")'
          spacing={0}
          zIndex={14}
          px="16px"
        >
          <HStack alignItems="center" flexWrap="nowrap" spacing={5}>
            <Link href={"/"} passHref>
              <Image
                w={{base: '100px', lg: '250px'}}
                h="auto"
                m="2px 16px"
                style={{ cursor: "pointer" }}
                src={"/assets/img/mainLayoutImg/logo.webp"}
                alt=""
              />
            </Link>
          </HStack>
          <LangSwitcher />
        </HStack>
      );
    }
    return this.props.children;
  }
}

export default ErrorHeaderPage;
