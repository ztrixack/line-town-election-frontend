import { JSX } from 'preact';
import { afterEach } from 'vitest';
import { cleanup, render } from '@testing-library/preact';

afterEach(() => {
	cleanup();
});

const customRender = (ui: JSX.Element, options = {}) =>
	render(ui, {
		// wrap provider(s) here if needed
		wrapper: ({ children }: { children: JSX.Element }) => children,
		...options,
	});

export * from '@testing-library/preact';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
