export const deleteEmptyProperties = (obj: any) => {
  Object.keys(obj).forEach(key => {
    if (obj[key] && typeof obj[key] === 'object') deleteEmptyProperties(obj[key]);
    else if (obj[key] == null || obj[key] === undefined || obj[key] === '')
      delete obj[key];
  });
  return obj;
};
