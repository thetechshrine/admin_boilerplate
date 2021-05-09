import axios from 'axios';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});

const jsonContentType = { 'Content-Type': 'application/json' };

function handleHttpErrorResponse({ dispatch, errorType }) {
  return function (error) {
    const message = error.response?.data?.message ?? error.message;
    if (dispatch && errorType) dispatch({ type: errorType, payload: { message } });
  };
}

export { httpClient, jsonContentType, handleHttpErrorResponse };
