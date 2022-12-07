import dynamic from "next/dynamic";
import {themeName} from "../envs/theme";

export const getDynamicComponent =  (path, name) =>  {
  const theme = process.env.NEXT_PUBLIC_THEME;
  let Component, isExist;

  try {
    require(`/components/themes/${theme}/${path}`);
    isExist = true
  } catch (err) {
    isExist = false;
  }

  if (isExist) {
    Component = dynamic(() => import(`/components/themes/${theme}/${path}`)
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
      return require(`../styles/${process.env.NEXT_PUBLIC_THEME}/theme`)
    } else {
      return require(`../styles/theme`)
    }
}