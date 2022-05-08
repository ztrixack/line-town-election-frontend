const baseUrl = import.meta.env.VITE__SERVICE_BASE_URL || 'http://localhost:5001';

const defaultConfig = {
	baseUrl,
	apiUrl: `${baseUrl}/api`,
};

export default defaultConfig;
