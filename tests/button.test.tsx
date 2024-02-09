import { default as Button } from '../src/app/components/Button';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Button component', () => {
  it('expect to render', () => {
    const { container } = render(
      <Button
        label="Go to shop"
        variant="primary"
        onClick={jest.fn()}
        size="regular" />
    );

    expect(container).not.toBeEmptyDOMElement();
  });
});
