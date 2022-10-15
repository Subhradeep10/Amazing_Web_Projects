import { loginApi } from "@network/network";

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGGED_OUT,
  SET_LOADER,
} from "@constants/Types";

import {
  saveAccessTokenInLocalStorage,
  login as setHeaders,
} from "@helper/helpers";

export const login: any = (data: any, cb: any) => (dispatch: any) => {
  dispatch({ type: LOGIN_REQUEST });

  var bodyFormData = new FormData();
  bodyFormData.append("username", data["username"]);
  bodyFormData.append("password", data["password"]);

  return loginApi(bodyFormData)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res?.data?.access_token });
      saveAccessTokenInLocalStorage(res.data);
      setHeaders(res.data);

      if (cb) {
        cb();
      }
      return res;
    })
    .catch((err) => {
      throw {
        message: "Invalid Email or Password",
      };
    });
};

export const setloader: any = (params: boolean) => (dispatch: any) => {
  dispatch({ type: SET_LOADER, payload: params });
};

export const logout: any = (data: any) => (dispatch: any) => {
  console.log("logout ");
  dispatch({ type: LOGGED_OUT });
  window.location.replace("/");
};
