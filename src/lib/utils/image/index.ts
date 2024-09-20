export const getUrlImage = (url: string, directory: string) => {
  if (url.match(/^https?:\/\/.+\/.+$/)) {
    return url;
  }

  return `${process.env.NEXT_PUBLIC_URL_BACKEND}/images/${directory}/${url}`;
};
