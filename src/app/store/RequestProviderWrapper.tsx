import React, { useState, useEffect } from "react";
import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosInstance
} from "axios";
import { RequestProvider } from "react-request-hook";
import { useDispatch } from "react-redux";
import { LoadingBar, showLoading, hideLoading } from "react-redux-loading-bar";

const config = require('../../../package.json').config;

const BASE_URL = `${config.baseURL}v1`;

export const RequestProviderWrapper: React.FC<{ name: string }> = ({ name, children }) => {
  const dispatch = useDispatch();
  const [instance, setInstance] = useState<AxiosInstance | null>(null);

  useEffect(() => {
    const log = (status: string) =>
      dispatch({
          type: `@${name} [${status}]`
      });

    const onRequest = (config: AxiosRequestConfig) => {
      log("START");
      dispatch(showLoading());
      return config;
    };

    const onSuccess = (response: AxiosResponse) => {
        log("SUCCESS");
        dispatch(hideLoading());
        return response;
    };

    const onError = (error: AxiosError) => {
        if (axios.isCancel(error)) {
            log("CANCEL");
        } else {
            log("ERROR");
        }
        dispatch(hideLoading());

        return Promise.reject(error);
    };

    const next = axios.create({ baseURL: BASE_URL });
    next.interceptors.request.use(onRequest);
    next.interceptors.response.use(onSuccess, onError);
    setInstance(() => next);
  }, [dispatch, name]);

  if (!instance) {
    return null;
  }

  return (
    <RequestProvider value={instance}>
      <React.Fragment>
        <LoadingBar />
        {children}
      </React.Fragment>
    </RequestProvider>
  );
};
