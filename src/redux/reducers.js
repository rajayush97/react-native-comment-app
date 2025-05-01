const initialState = {
  comments: [],
  ratings: {},
  error: null,
  loading: false,
  page: 1,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_COMMENTS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_COMMENTS_SUCCESS':
      return {
        ...state,
        comments: [...state.comments, ...action.payload],
        loading: false,
        page: action.page,
      };
    case 'FETCH_COMMENTS_FAILURE':
      return { ...state, error: action.payload, loading: false };
    case 'SET_RATING':
      return {
        ...state,
        ratings: { ...state.ratings, [action.payload.id]: action.payload.rating },
      };
    default:
      return state;
  }
}
