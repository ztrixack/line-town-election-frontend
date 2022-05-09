const baseUrl = import.meta.env.VITE__BACKEND_BASE_URL || 'http://localhost:8000';
const socketUrl = import.meta.env.VITE__SOCKET_BASE_URL || 'ws://localhost:8000/ws';

const defaultConfig = {
	baseUrl,
	socketUrl,
	apiUrl: `${baseUrl}/api`,
};

export default defaultConfig;
