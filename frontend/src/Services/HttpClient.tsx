import axios from 'axios';

const HEADERS = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': '*', Accept: 'application/json' };
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const resolveUrl = (url: string, isOverride: boolean): string => {
  return isOverride ? url : `${BACKEND_URL}${url}`;
};

const resolveHeaders = (authToken: string, isSecured: boolean) =>
  isSecured ? { ...HEADERS, Authorization: authToken, 'Access-Control-Allow-Headers': '*, Authorization' } : HEADERS;

export const Get = async (
  url: string,
  authToken: string,
  isOverride: boolean = false,
  isSecured: boolean = true,
): Promise<any> =>
  await axios.get(resolveUrl(url, isOverride), {
    headers: resolveHeaders(authToken, isSecured),
  });

export const Post = async (
  url: string,
  authToken: string,
  body: {},
  isOverride: boolean = false,
  isSecured: boolean = true,
): Promise<any> =>
  await axios.post(resolveUrl(url, isOverride), body, {
    headers: resolveHeaders(authToken, isSecured),
  });

export const Put = async (
  url: string,
  authToken: string,
  body: {},
  isOverride: boolean = false,
  isSecured: boolean = true,
): Promise<any> =>
  await axios.put(resolveUrl(url, isOverride), body, {
    headers: resolveHeaders(authToken, isSecured),
  });

export const Delete = async (
  url: string,
  authToken: string,
  isOverride: boolean = false,
  isSecured: boolean = true,
): Promise<any> =>
  await axios.delete(resolveUrl(url, isOverride), {
    headers: resolveHeaders(authToken, isSecured),
  });
