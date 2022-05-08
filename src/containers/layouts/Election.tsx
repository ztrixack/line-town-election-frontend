import { FunctionComponent } from 'preact';

const ElectionLayout: FunctionComponent = ({ children }) => {
	return (
		<div class="container mx-auto">
			<main>{children}</main>
		</div>
	);
};

export default ElectionLayout;
