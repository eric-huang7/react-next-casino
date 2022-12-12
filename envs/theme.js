export const themeName = (process.env.NEXT_PUBLIC_THEME || '').trim();
export const assetsPath = themeName ? `/${themeName}/assets` : '/assets';