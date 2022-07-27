import * as React from "react";
import {Text} from "@chakra-ui/layout";
import { useDispatch } from 'react-redux'
import { getTournaments } from '../../../redux/tournaments/action'
import { TournamentInfoContainer } from './components/TournamentInfoContainer'
import { showTournaments, showTournamentsDetails } from '../../../redux/popups/action'
import { useEffect, useRef } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

const TournamentSidebar = ({ t, userInfo, isShowModal, router, toursref }) => {
  const dispatch = useDispatch()
  const firstField = React.useRef()

  useEffect(() => {
    dispatch(getTournaments())
  }, [])

  const burgerMenuRef = useRef()

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath())
    if (!path.includes(burgerMenuRef.current)) {
      dispatch(showTournaments(false))
    }
    if (path.includes((toursref.current))) {
      dispatch(showTournaments(true))
    }
  }
  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
    return () => {
      document.body.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  function hideTournaments (e) {
    dispatch(showTournaments(false))
  }

  function showDetails () {
    dispatch(showTournamentsDetails(true))
    dispatch(showTournaments(false))
  }

  return (
    <Drawer
      isOpen={isShowModal.isShowTournaments}
      placement='right'
      initialFocusRef={firstField}
      onClose={hideTournaments}
    >
      <DrawerOverlay />
      <DrawerContent maxW="358px" bg="#1b1e23">
        <DrawerCloseButton color="white" _focus={{boxShadow: "none !important"}} size="lg"/>
        <DrawerHeader borderBottomWidth='0' color="white">
          <Text fontSize={16} fontFamily="Verdana" fontWeight={400} textTransform="uppercase">
            {t("tournaments.heading")}
          </Text>
        </DrawerHeader>

        <DrawerBody p={0} overflow="hidden">
          <TournamentInfoContainer showDetails={showDetails} userInfo={userInfo} router={router} t={t}/>
        </DrawerBody>

      </DrawerContent>
    </Drawer>
  )
}

export default TournamentSidebar;
