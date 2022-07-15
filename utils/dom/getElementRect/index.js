const getElementRect = (elementID) => {
  const element = document.getElementById(elementID);
  const rect = element && element.getBoundingClientRect();

  return rect;
};

export default getElementRect;
