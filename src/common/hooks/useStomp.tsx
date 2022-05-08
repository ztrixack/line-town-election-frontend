import { useEffect, useState } from 'preact/hooks';
import { Client, StompHeaders, messageCallbackType } from '@stomp/stompjs';

import _config from '@/common/configs/index';

const useStomp = (routingKey: string, onCallback: messageCallbackType) => {
	const [client, setClient] = useState<Client>();
	const [ready, setReady] = useState(false);

	useEffect(() => {
		const client = new Client({
			brokerURL: _config.brokerUrl,
			reconnectDelay: 200,
			heartbeatIncoming: 0,
			heartbeatOutgoing: 0,
			debug: str => {
				console.log('STOMP: ' + str);
			},
			onConnect: () => {
				client.subscribe(`/topic/${routingKey}`, onCallback);
				setReady(true);
			},
			onDisconnect: () => {
				setReady(false);
			},
		});

		client.activate();

		setClient(client);
	}, []);

	const publish = (routingKey: string, header?: StompHeaders, payLoad?: string) => {
		if (!client?.connected) {
			return false;
		}

		client.publish({ destination: `/app/${routingKey}`, headers: header, body: payLoad });
		return true;
	};

	return { publish, ready };
};

export default useStomp;
