import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE } from '../types/users.types';
import usersService from '../services/users.service';
import { handleHttpErrorResponse } from '../../api';

function getUsers() {
  return (dispatch) => {
    dispatch({ type: GET_USERS_REQUEST });

    usersService
      .getUsers()
      .then(({ data }) => {
        dispatch({ type: GET_USERS_SUCCESS, payload: { users: data } });
      })
      .catch(handleHttpErrorResponse({ dispatch, errorType: GET_USERS_FAILURE }));
  };
}

export default { getUsers };
