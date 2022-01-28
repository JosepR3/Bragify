import React from 'react';
import { ReactDOM } from 'react-dom';
import '@testing-library/react'
import { render } from '@testing-library/react';

import SongControls from '..';

test('renders content', () => {
    const component = render(<SongControls />);
});