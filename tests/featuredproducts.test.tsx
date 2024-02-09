import { default as FeaturedProducts } from '../src/app/HomePage/FeaturedProducts';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('FeaturedProducts component', () => {
    it('should render products', async () => {
        // @ts-ignore
        global.fetch = () => ({ json: () => [] });

        const { container } = render(<FeaturedProducts />);

        expect(container).not.toBeEmptyDOMElement();
    });
});
