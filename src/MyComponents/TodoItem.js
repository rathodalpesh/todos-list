import React from 'react'

export const TodoItem = (props) => {
  return (
    <div>
      <h4>{props.todo.title}</h4>
      <p>{props.todo.describe}</p>
      <button className='btn btn-sn btn-danger' onClick={() => {props.onDelete(props.todo)}}>Delete</button>
      <hr></hr>
    </div>
  )
}
