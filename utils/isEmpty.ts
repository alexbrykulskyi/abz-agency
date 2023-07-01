export const isEmpty = (obj: object) => {
  if (typeof obj !== 'object') return true;

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
};
