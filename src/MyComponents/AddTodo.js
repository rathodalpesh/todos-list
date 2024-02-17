import React, { useState } from 'react'

export const AddTodo = ({ addTodo }) => {

    const [title, setTitle] = useState("");
    const [describe, setDescribe] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !describe) {
            alert("Title or Description can't be Blank!!");
        } else {
            addTodo(title, describe);
            setTitle("");
            setDescribe("");
        }
    }

    return (
        <div className='container my-3'>
            <form onSubmit={submit}>
                <h3>Add a Todo</h3>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Todo Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Todo Description</label>
                    <input type="text" className="form-control" value={describe} onChange={(e) => setDescribe(e.target.value)} id="describe" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
