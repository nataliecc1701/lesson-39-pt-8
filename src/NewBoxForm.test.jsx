import React from 'react';
import { render } from '@testing-library/react'
import NewBoxForm from './NewBoxForm'

it("renders without crashing", function () {
    render(<NewBoxForm
        addBox={() => {}} />);
})

it("matches the snapshot", function () {
    const {asFragment} = render(<NewBoxForm
        addBox={() => {}} />);
    expect(asFragment).toMatchSnapshot();
})