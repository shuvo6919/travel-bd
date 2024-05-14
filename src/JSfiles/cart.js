const getStoredData = (email) => {
  const item = localStorage.getItem(email);
  if (item) {
    return JSON.parse(item);
  }
  return [];
};

const addToCart = (email, data) => {
  console.log("data at js file", data);
  const storedData = getStoredData(email);
  console.log(storedData);
  storedData.push(data);
  localStorage.setItem(email, JSON.stringify(storedData));
};

export { addToCart, getStoredData };
