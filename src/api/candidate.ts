import buildAPI from '@/utils/buildAPI';

export default buildAPI('/candidates', {
	find: {
		method: 'get',
	},
});
