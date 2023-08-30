import React from 'react';

export default function Todo(props) {
    return (
        <li>
            {props.map((DUMMY_TODOS) => 
                (DUMMY_TODOS.Todo)
            )}
        </li>
    );
};