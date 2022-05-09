import axios, { AxiosError, AxiosRequestConfig } from 'axios';

import _config from '@/common/configs/index';
import { DEV_TOKEN } from '@/common/configs/constants';

const baseURL = _config.apiUrl;

axios.defaults.baseURL = baseURL;
function buildURLFromTemplate(data: Record<string, any>, options: AxiosRequestConfig) {
	const outputData = { ...data };
	const outputURL = options.url?.replace(/\{(.+?)\}/g, (m: string, label: string) => {
		const value = outputData[label];
		if (value !== undefined) {
			delete outputData[label];
		} else {
			throw new Error(`Cannot find ${label} in ${options.url}`);
		}
		return value;
	});

	return {
		data: outputData,
		url: outputURL,
	};
}

export default async <ResponseData>(
	data: Record<string, any>,
	options: AxiosRequestConfig,
	extraOptions: AxiosRequestConfig,
) => {
	const config: AxiosRequestConfig = {};
	const { data: outputData, url } = buildURLFromTemplate(data, options);
	config.url = url;
	switch (options.method) {
		case 'post':
			config.method = 'POST';
			config.data = outputData;
			break;
		case 'get':
			config.method = 'GET';
			config.params = outputData;
			break;
		case 'put':
			config.method = 'PUT';
			config.data = outputData;
			break;
		case 'delete':
			config.method = 'DELETE';
			config.params = outputData;
			break;
		case 'patch':
			config.method = 'PATCH';
			config.data = outputData;
			break;
		default:
			throw new Error('Http method not support');
	}

	try {
		// set header
		config.headers = {
			...options.headers,
		};
		// config.withCredentials = true;
		config.headers.Authorization = `Bearer ${DEV_TOKEN}`;

		const result = await axios.request<ResponseData>({ ...config, ...extraOptions });
		return result.data;
	} catch (error) {
		const err = error as AxiosError<any>;
		if (err.response && err.response.data && err.response.data.error) {
			err.response = err.response.data.error;
		}
		throw err;
	}
};
