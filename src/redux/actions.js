export const fetchComments = (page = 1) => async dispatch => {
  dispatch({ type: 'FETCH_COMMENTS_REQUEST' });
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
    const data = await response.json();
    dispatch({ type: 'FETCH_COMMENTS_SUCCESS', payload: data, page });
  } catch (error) {
    dispatch({ type: 'FETCH_COMMENTS_FAILURE', payload: error.message });
  }
};

export const setRating = (id, rating) => ({
  type: 'SET_RATING',
  payload: { id, rating }
});
