import React from 'react';
import { ReactDOM } from 'react-dom';
import '@testing-library/react'
import { fireEvent, render } from '@testing-library/react';

import SongCard from '..';

test('renders content', () => {
    const component = render(<SongCard />);
});

// test('clicking play button calls event handler at least once', () => {
//     const mockHandler = jest.fn();
//     const component = render(<SongCard />);
//     const button = component.getByTestId('play-button');
//     fireEvent.click(button);
//     expect(mockHandler.mock.calls).toHaveLength(1);
// });
