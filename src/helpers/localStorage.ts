export const setLocal = (k: string, items: unknown) => {
  try {
    const serializedData = JSON.stringify(items);
    localStorage.setItem(k, serializedData);
  } catch (error) {
    console.log(error);
  }
};

export const getLocal = (k: string) => {
  try {
    const serializedData = localStorage.getItem(k);
    if (!serializedData) return [];
    return JSON.parse(serializedData);
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getAllStorage = () => {
  const allData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key !== null) {
      const value = getLocal(key);
      Object.assign(allData, value);
    }
  }
  return allData;
};
