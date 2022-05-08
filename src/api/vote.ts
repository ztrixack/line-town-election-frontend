import buildAPI from '@/utils/buildAPI';

export default buildAPI('/vote', {
	vote: {
		method: 'post',
	},
	status: {
		url: 'status',
		method: 'post',
	},
});
