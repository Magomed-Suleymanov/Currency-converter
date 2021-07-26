const initialState = {
  items: [],
  loadingItems: false,
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
        items: [...state.items, action.payload],
        loadingItems: false,
      };

    default:
      return state;
  }
};
