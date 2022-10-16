import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SET_LOADER,
  LOGGED_OUT,
} from "@constants/Types";

const initialState = {
  isLoggedIn: false,
  loading: false,
  user: {},
};
const accountReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return { ...state, loading: true };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: { ...state.user, ...action.payload },
        loading: false,
        isLoggedIn: true,
      };
    }

    case LOGGED_OUT: {
      localStorage.setItem("auth", "");
      return {
        ...state,
        user: {},
        isLoggedIn: false,
      };
    }

    case LOGIN_ERROR: {
      return { ...state, loading: false, isLoggedIn: false };
    }

    case SET_LOADER: {
      return { ...state, loading: false };
    }

    default:
      return state;
  }
};
export default accountReducer;
