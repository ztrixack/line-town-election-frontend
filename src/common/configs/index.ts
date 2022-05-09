const baseUrl = import.meta.env.VITE__SERVICE_BASE_URL || 'http://localhost:8000';
const brokerUrl = import.meta.env.VITE__BROKER_BASE_URL || 'ws://localhost:8000/ws';

const defaultConfig = {
	baseUrl,
	brokerUrl,
	apiUrl: `${baseUrl}/api`,
};

export default defaultConfig;
