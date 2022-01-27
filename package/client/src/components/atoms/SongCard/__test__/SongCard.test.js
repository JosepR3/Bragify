import React from 'react';
import { ReactDOM } from 'react-dom';
import { render } from '@testing-library/react';

import SongCard from '..';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SongCard />, div);

});

// it("renders song correctly", () => {
//     const { getByTestId('SongCard')
// }=
// })
// https://youtu.be/3e1GHCA3GP0
// https://youtu.be/KYjjtRgg_H0
// test redux
