import React, { useState } from 'react'
// import { useState } from "react";

export const AddTodo = (props) => {
    // sunmit function
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or description can not be black");
        }
        else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className="container">
            <h4 className="text-center">Add Todo-Work</h4>
            <form className="my-3 text-center" onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Todo title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Ente title" />
                    {/* <small id="emailHelp" className ="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" placeholder="Enter Description" />
                </div>
                {/* <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className ="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <br />
                <button type="submit" className="btn btn-sm btn-dark">Add todo</button>
            </form>
        </div>
    )
}
