import { AxiosRequestConfig } from 'axios';
import request from './request';

const buildAPI = (url: string, actions: Record<string, AxiosRequestConfig>) => {
	return Object.keys(actions)
		.map(key => {
			const config: AxiosRequestConfig = actions[key];
			if (!config.url?.startsWith('/')) {
				config.url = `${url}/${config.url}`;
			}

			return { key, config };
		})
		.reduce<Record<string, <T>(data?: Record<string, any>, options?: AxiosRequestConfig) => Promise<T>>>(
			(result, value) => ({
				...result,
				[value.key]: <T>(data = {}, options = {}) => request<T>(data, value.config, options),
			}),
			{},
		);
};

export default buildAPI;
