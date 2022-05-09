import buildAPI from '@/utils/buildAPI';

export default buildAPI('/vote', {
	vote: {
		url: '',
		method: 'post',
	},
	status: {
		url: 'status',
		method: 'post',
	},
});
