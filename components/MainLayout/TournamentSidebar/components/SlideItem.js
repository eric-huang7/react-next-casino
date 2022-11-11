import { Box } from "@chakra-ui/react"
import {Text} from "@chakra-ui/layout";
import {Fade} from "@chakra-ui/transition";
import { urlGen } from '../../../../helpers/imageUrl'
import {useState} from "react";

export const SlideItem = ({ t, setSliderPosition, count, tournamentData, router, sliderPosition }) => {
  const [hover, setHover] = useState(false);
  let image = 'tournament_image'

  try {
    image = urlGen(tournamentData.image.split('.')[0] + `_${router.locale}` + '.png')
  } catch (e) {
    image = 'tournament_image'
  }

  const tournamentClickHandler = () => {
    let sendData = JSON.stringify({
      game_category_ids: tournamentData.game_category_ids ? `${tournamentData.game_category_ids}` : '',
      game_ids: tournamentData.game_ids ? `${tournamentData.game_ids}` : '',
      game_provider_ids: tournamentData.game_provider_ids ? `${tournamentData.game_provider_ids}` : ''
    })

    router.push({
      pathname: '/games-page/[id]',
      query: { id: 'tournaments', tournamentData: sendData },
    })
  }

  return (
    <Box onClick={() => setSliderPosition(count)} p="5px" position="relative">
      <Box
        bg="grey.800"
        w="285px"
        h="150px"
        border="1px solid"
        borderColor="grey.400"
        position="relative"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img src={image} alt={tournamentData.frontend_id}/>
      </Box>
      {sliderPosition === count && <Fade in={hover}>
        <Box
          position="absolute"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          top={0}
          left={0}
          bottom={0}
          right={0}
          cursor="pointer"
          onClick={tournamentClickHandler}
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="rgba(0,0,0, 0.7)"
        >
          <Text
            color="white"
            fontSize="18px"
            fontFamily="Verdana"
            textTransform="uppercase"
          >{t('tournaments.learnMore')}</Text>
        </Box>
      </Fade>}
    </Box>
  )
}
