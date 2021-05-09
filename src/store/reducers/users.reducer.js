import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE } from '../types/users.types';

function initState() {
  return { users: [], requesting: false };
}

export default function (state = initState(), action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        requesting: true,
        users: []
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        requesting: false,
        users: payload.users
      };

    case GET_USERS_FAILURE:
      return {
        ...state,
        requesting: false
      };

    default:
      return state;
  }
}
