export const loadingCurrency = () => {
  return (dispatch) => {
    dispatch({
      type: 'loading/currency/start',
    });

    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'loading/currency/success',
          payload: json,
        });
      });
  };
};
