export const truncateName = (title: string) => {
  if (title.length > 18) {
    title = title?.slice(0, 18);
    title = `${title}...`;
  }

  return title;
};

export const truncateDescription = (title: string) => {
  if (title.length > 22) {
    title = title?.slice(0, 22);
    title = `${title}...`;
  }

  return title;
};