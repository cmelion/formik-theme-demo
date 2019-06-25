import React, { useState, useEffect } from "react";
import axios, {
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
    AxiosInstance
} from "axios";
import { RequestProvider } from "react-request-hook";
import { useDispatch } from "react-redux";

const BASE_URL = "https://5c564f1ed293090014c0ee3e.mockapi.io/api/v1";

export const DefaultRequestProvider: React.FC<{ name: string }> = ({ name, children }) => {
    const dispatch = useDispatch();
    // const [requests, setRequests] = useState(0);
    // const [instance, setInstance] = useState<AxiosInstance | null>(null);
    const [instance, setInstance] = useState<AxiosInstance | null>(null);

    const log = (status: string) =>
        dispatch({
            type: `@${name} [${status}]`
        });

    const onRequest = (config: AxiosRequestConfig) => {
        // setRequests(n => n + 1);
        log("START");
        return config;
    };

    const onSuccess = (response: AxiosResponse) => {
        log("SUCCESS");
        // setResponses(n => n + 1);
        return response;
    };

    const onError = (error: AxiosError) => {
        if (axios.isCancel(error)) {
            // setCancelations(n => n + 1);
            log("CANCEL");
        } else {
            log("ERROR");
        }

        return Promise.reject(error);
    };

    useEffect(() => {
        const next = axios.create({ baseURL: BASE_URL });
        next.interceptors.request.use(onRequest);
        next.interceptors.response.use(onSuccess, onError);
        setInstance(() => next);
    }, []);

    if (!instance) {
        return null;
    }

    return (
        <RequestProvider value={instance}>
                {children}
        </RequestProvider>
    );
};
