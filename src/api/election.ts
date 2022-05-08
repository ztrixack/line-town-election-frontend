import buildAPI from '@/utils/buildAPI';

export default buildAPI('/election', {
	result: {
		url: 'result',
		method: 'get',
	},
	getToggle: {
		url: 'toggle',
		method: 'get',
	},
	toggle: {
		url: 'toggle',
		method: 'post',
	},
});
