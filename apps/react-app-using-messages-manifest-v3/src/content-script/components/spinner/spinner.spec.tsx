import { render } from '@testing-library/react';

import Example from './spinner';

describe('Example', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Example />);
    expect(baseElement).toBeTruthy();
  });
});
