import React from 'react';
import { render } from '@testing-library/react'
import TodoList from './TodoList'

it("renders without crashing", function () {
    render(<TodoList />);
})

it("matches the snapshot", function () {
    const {asFragment} = render(<TodoList />);
    expect(asFragment).toMatchSnapshot();
})