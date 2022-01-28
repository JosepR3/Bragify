import React from 'react';
import { ReactDOM } from 'react-dom';
import '@testing-library/react'
import { render } from '@testing-library/react';
import { prettyDOM } from '@testing-library/react';

import SongCarrousel from '..'

test('renders content', () => {
    const component = render(<SongCarrousel />);

    const card = component.container.querySelector('SongCard');
});