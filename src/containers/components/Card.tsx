import { FunctionComponent } from 'preact';

const Card: FunctionComponent = ({ children }) => {
	return (
		<div class="bg-white border border-gray-700 shadow-xs p-4 min-h-[320px] md:min-h-[450px] flex flex-col">
			{children}
		</div>
	);
};

export default Card;
