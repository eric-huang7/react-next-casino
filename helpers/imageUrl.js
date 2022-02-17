import {imagesUrl} from "../envs/url";

export const urlGen = (id) => `${imagesUrl}images/${id}`;

export const gameUrl = (id) => `${imagesUrl}games/${id}.webp`;

export const iconsUrl = (id) => `${imagesUrl}icons/${id}`;

export const newsImageUrl = (newsName) => `${imagesUrl}images/${newsName}`;

export const paymentsMethodsUrl = (method) => `${imagesUrl}currency/${method}.svg`;