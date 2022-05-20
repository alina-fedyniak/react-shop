import { AxiosInstance, AxiosRequestConfig } from 'axios';

export type TGenerateOptions = {
    method: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH';
    url: string;
    data?: any;
    params?: any;
    config?: AxiosRequestConfig;
    instance?: AxiosInstance
};

export type TFormatResponse = {
    data: any;
    status: number;
    statusText: string;
    headers?: any;
};