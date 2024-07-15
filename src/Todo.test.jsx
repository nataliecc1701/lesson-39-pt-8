import React from 'react';
import { render } from '@testing-library/react'
import Todo from './Todo'

it("renders without crashing", function () {
    render(<Todo 
        task="Be a test case"
        id="0001"
        removeTodo={() => {}} />);
})

it("matches the snapshot", function () {
    const {asFragment} = render(<Todo 
        task="Be a test case"
        id="0001"
        removeTodo={() => {}} />);
    expect(asFragment).toMatchSnapshot();
})