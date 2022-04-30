import {gameUrl} from "./imageUrl";

function preloadImage (src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = function() {
      resolve(img)
    }
    img.onerror = img.onabort = function() {
      resolve(src)
    }
    img.src = src
  })
}

export default async function preloadImages(gamesData, isCancelled, callback) {
  console.log('preloadImages func')
  if (isCancelled) {
    return
  }

  const imagesPromiseList = [];

  for (const game of gamesData) {
    imagesPromiseList.push(preloadImage(gameUrl(game.id)))
  }

  await Promise.all(imagesPromiseList)

  if (callback && typeof callback === 'function') {
    callback();
  }

  if (isCancelled) {
    return
  }
}
