import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  afterEach(cleanup)

  it('should take a snapshot', () => {
    const { container } = render(<Button label='Button' />);

    expect(container).toMatchSnapshot();
  });
})
