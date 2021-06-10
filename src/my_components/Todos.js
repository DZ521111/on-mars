import React from 'react'
import { Todo } from "./Todo";

export const Todos = (props) => {
    // css of todos <style></style>
    let todosStyle = {
        minheight: "100vh",
        margin: "102px auto"
    }

    return (
        <div className="container" style = {todosStyle}>
            <h2 className="text-center my-2">Todos-Milky-Way-List</h2>
            {props.todos.length === 0 ? "No planet work to display!" :
                props.todos.map((todo) => {
                    // console.log(props.todos.length)
                    return (<Todo todo={todo} key={todo.toNo} onDelete={props.onDelete} />)
                })}
        </div>
    )
}
