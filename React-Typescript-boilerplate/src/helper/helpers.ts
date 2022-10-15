import Environment from "@network/baseUrl";
import { store } from "@redux/store";
import {
  privateAgent
} from "@network/axiosAgent";
import { LOGIN_SUCCESS } from "@constants/Types";


export const saveAccessTokenInLocalStorage = (res: any) => {
  if (res.access_token) {
    localStorage.setItem(
      Environment.LOCAL_STORAGE_KEY,
      JSON.stringify(res.access_token)
    );
  }
};

export const getToken = () => {
  const token = localStorage.getItem(Environment.LOCAL_STORAGE_KEY);
  if (!token) return false;
  return JSON.parse(token);
};


export const getFromLocalStorage = (key: any) => {
  const getResult = localStorage.getItem(key);
  if (!getResult) return false;

  return JSON.parse(getResult);
};

export const login: any = (auth: any, cb: any) => {
  privateAgent.defaults.headers = {
    ...privateAgent.defaults.headers,
    Authorization: `Bearer ${auth.access_token}`,
  };

  if (cb) cb();
  store.dispatch({ type: LOGIN_SUCCESS, auth });
};


