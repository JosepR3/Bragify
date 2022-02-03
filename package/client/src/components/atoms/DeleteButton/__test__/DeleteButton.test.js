import React from 'react';
import { ReactDOM } from 'react-dom';
import '@testing-library/react'
import { fireEvent, render } from '@testing-library/react';
import DeleteButton from '..';

test('renders content', () => {
     const component = render(<DeleteButton />);
});

test('fires on click'), () => {
     const handleDelete = jest.fn();
     const { getByTestId } = render(<DeleteButton onClick={handleDelete} />);
     fireEvent.click(getByTestId('delete-button'));
     expect(handleDelete).toHaveBeenCalled();

}
