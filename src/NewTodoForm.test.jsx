import React from 'react';
import { render } from '@testing-library/react'
import NewTodoForm from './NewTodoForm'

it("renders without crashing", function () {
    render(<NewTodoForm
        addTodo={() => {}} />);
})

it("matches the snapshot", function () {
    const {asFragment} = render(<NewTodoForm
        addTodo={() => {}} />);
    expect(asFragment).toMatchSnapshot();
})