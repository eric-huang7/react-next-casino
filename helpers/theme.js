import dynamic from "next/dynamic";
import {themeName} from "../envs/theme";

export const getDynamicComponent =  (path, name) =>  {
  let Component, isExist;

  try {
    require(`/components/themes/${themeName}/${path}`);
    isExist = true
  } catch (err) {
    isExist = false;
  }

  if (isExist) {
    Component = dynamic(() => import(`/components/themes/${themeName}/${path}`)
        .then((result) => result[name || 'default']),
      {
        ssr: false,
      }
    );
  } else {
    Component = dynamic(() => import(`/components/${path}`)
        .then((result) => result[name || 'default']),
      {
        ssr: false,
      }
    );
  }

  return Component
}

export const getTheme = () => {
    if (themeName) {
      return require(`../styles/${themeName}/theme`)
    } else {
      return require(`../styles/theme`)
    }
}