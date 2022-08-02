import React from 'react'

export default function Todo({todo}) {
    function markComplete(e) {
        todo.isComplete = !todo.isComplete
        console.log('Todo', todo)
    }
    return (
        <div>
            <label>
                <input type='checkbox' onChange={markComplete} checked={todo.isComplete}/>
                {todo.name}
            </label>
        </div>
    )
}
