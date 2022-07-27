import styles from '../../../../styles/TournamentSidebar/TournamentSidebar.module.scss'
import { urlGen } from '../../../../helpers/imageUrl'

export const SlideItem = ({ t, setSliderPosition, count, tournamentData, router, sliderPosition }) => {

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
    <div onClick={() => setSliderPosition(count)} className={styles.slideItemWrapper}>
      <div className={styles.slideItem}>
        <img src={image} alt={tournamentData.frontend_id}/>
      </div>
      <div
        onClick={() => tournamentClickHandler()}
        className={`${styles.tournamentSliderHover} ${sliderPosition === count ? styles.showHover : ''}`}
      >
        <p className={styles.learnMore}>{t('tournaments.learnMore')}</p>
      </div>
    </div>
  )
}