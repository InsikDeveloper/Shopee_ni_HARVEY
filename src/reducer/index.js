export const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };

    case "price":
      return { ...state, price: action.payload };

    case "quantity":
      return { ...state, quantity: action.payload };

    case "town":
      return { ...state, town: action.payload };

    case "payment":
      return { ...state, payment_method: action.payload };

    default:
      throw new Error();
  }
};

export const item = {
  name: "",
  price: 0,
  quantity: 0,
  town: "tubigon",
  payment_method: "gcash",
};
