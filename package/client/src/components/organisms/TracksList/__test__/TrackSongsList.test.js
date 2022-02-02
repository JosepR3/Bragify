import React from 'react';
import { ReactDOM } from 'react-dom';
import '@testing-library/react'
import { fireEvent, render } from '@testing-library/react';
import TracksList from '../TracksList';

test('renders content', () => {
     const component = render(<TracksList />);
});
