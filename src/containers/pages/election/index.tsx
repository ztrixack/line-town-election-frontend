import ElectionLayout from '@/containers/layouts/Election';

const ElectionPage = () => {
	const mockups = [...Array(8)].fill(0);

	return (
		<ElectionLayout>
			<div class="flex justify-center my-16">
				<h1 class="text-5xl md:text-6xl font-bold text-center">LINE TOWN Election</h1>
			</div>
			<div class="flex flex-wrap px-3 md:px-6">
				{mockups.map(() => (
					<div class="w-full md:w-1/2 lg:w-1/4 md:px-6">
						<div class="w-full h-80 mx-auto my-6 border-2 border-gray-700"></div>
					</div>
				))}
			</div>
		</ElectionLayout>
	);
};

export default ElectionPage;
