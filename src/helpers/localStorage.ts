const k = 'user-data';

export const setLocal = (items: unknown) => {
  try {
    const serializedData = JSON.stringify(items);
    localStorage.setItem(k, serializedData);
  } catch (error) {
    console.log(error);
  }
};

export const getLocal = () => {
  try {
    const serializedData = localStorage.getItem(k);
    if (!serializedData) return [];
    return JSON.parse(serializedData);
  } catch (error) {
    console.log(error);
  }
};
