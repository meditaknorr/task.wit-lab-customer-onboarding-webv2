export const photo = (media, id) => {
  const mediaItem = (media.filter((data) => data.id === id))[0];
  return mediaItem;
};
