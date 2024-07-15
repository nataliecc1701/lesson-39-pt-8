import React from 'react';
import { render } from '@testing-library/react'
import Box from './Box'

it("renders without crashing", function () {
    render(<Box 
        color="slateblue"
        width={100} height={100}
        id="0001"
        removeBox={() => {}} />);
})

it("matches the snapshot", function () {
    const {asFragment} = render(<Box
        color="slateblue"
        width={100} height={100}
        id="0001"
        removeBox={() => {}} />);
    expect(asFragment).toMatchSnapshot();
})