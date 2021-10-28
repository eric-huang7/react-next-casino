import ReactPlayer from "react-player/lazy";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const playerStyles = {
  margin: "0 auto",
  width: '640px',
  height: '405px'
}
const playerStylesMobile = {
  margin: "0 auto",
  width: '398px',
  height: '249px'
}

export const Player = ({url}) => {
  const {height, width} = useWindowDimensions();



  return (
    <ReactPlayer url={url} playing controls light={true} style={playerStylesMobile} />
  )
}