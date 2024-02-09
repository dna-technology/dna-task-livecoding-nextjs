import { default as Home } from '../src/app/page';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Home page', () => {
    it('should render banner and products', () => {
        // @ts-ignore
        global.fetch = async () => ({ json: async () => [] });

        const { getByText } = render(<Home />);

        expect(getByText('Explore a world of style and comfort')).toBeInTheDocument();
        expect(getByText('Top Selling')).toBeInTheDocument();
    });
});
