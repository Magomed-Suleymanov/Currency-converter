const initialState = {
  // items: [],
  loadingItems: false,
  currency: [],
};

export const currentCurrency = (state = initialState, action) => {
  switch (action.type) {
    case 'loading/currency/start':
      return {
        ...state,
        loadingItems: true,
      };
    case 'loading/currency/success':
      return {
        ...state,
        // items: [...state.items, action.payload],
        loadingItems: false,
        currency: Object.values(action.payload.Valute),
      };

    default:
      return state;
  }
};
