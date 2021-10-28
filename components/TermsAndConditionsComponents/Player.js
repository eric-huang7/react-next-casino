import ReactPlayer from "react-player/lazy";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const playerStyles = {
  margin: "0 auto",
  width: '640px',
  height: '405px'
}
const playerStylesTablets = {
  margin: "0 auto",
  width: '498px',
  height: '349px'
}
const playerStylesMobile = {
  margin: "0 auto",
  width: '398px',
  height: '249px'
}
const playerStylesMiniMobile = {
  margin: "0 auto",
  width: '258px',
  height: '149px'
}

export const Player = ({url}) => {
  const {height, width} = useWindowDimensions();

  let style = playerStyles;

  if (width > 740) {
    style = playerStyles;
  } else if (width > 620) {
    style = playerStylesTablets;
  } else if (width > 420) {
    style = playerStylesMobile;
  } else if (width <= 420) {
    style = playerStylesMiniMobile;
  }


  return (
    <ReactPlayer
      url={url}
      controls={true}
      width={style.width}
      height={style.height}
      // light={true}
      style={playerStyles}
    />
  )
}