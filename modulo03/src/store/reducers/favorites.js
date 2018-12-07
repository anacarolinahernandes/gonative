const initialState = {
  data: [],
  loading: false,
  errorOnAdd: null,
};

export default function favorites(state = initialState, action) {
  switch (action.type) {
    // Vai executar mesmo que o middleware (redux-saga) não tenha finalizado a requisição à API!
    case 'ADD_FAVORITE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_FAVORITE_SUCCESS':
      return {
        data: [...state.data, action.payload.repository],
        errorOnAdd: null,
        loading: false,
      };
    case 'ADD_FAVORITE_ERROR':
      return {
        ...state,
        errorOnAdd: action.payload.message,
        loading: false,
      };
    default:
      return state;
  }
}
