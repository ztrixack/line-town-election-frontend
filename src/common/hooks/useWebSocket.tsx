import { useEffect, useState } from 'preact/hooks';
import { IMessageEvent, w3cwebsocket as W3CWebSocket } from 'websocket';

import _config from '@/common/configs/index';
import { guidGenerator } from '@/utils/calculate';

const useWebSocket = (route: string, onCallback: (message: IMessageEvent) => void) => {
	const [ready, setReady] = useState(false);

	useEffect(() => {
		const uuid = guidGenerator();
		const client = new W3CWebSocket(`${_config.socketUrl}/${route}/${uuid}`);

		client.onopen = () => {
			console.log(`WebSocket Client Connected ${uuid}`);
			setReady(true);
		};

		client.onclose = () => {
			console.log(`WebSocket Client Disconnected ${uuid}`);
			setReady(false);
		};

		client.onmessage = onCallback;

		return () => {
			client.close();
		};
	}, [route]);

	return [ready];
};

export default useWebSocket;
