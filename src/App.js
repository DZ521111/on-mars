// import logo from './logo.svg';
import "./App.css";
import Header from "./my_components/Header";
import { Todos } from "./my_components/Todos";
import { Footer } from "./my_components/Footer";
import { AddTodo } from "./my_components/AddTodo";
// import { Todo } from "./my_components/Todo";
import React, { useEffect, useState } from "react";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  // create onDelete function:
  const onDelete = (todo) => {

    // console.log(todo, "this task was deleted!")
    // here we are going to use hooks which name is useState
    setTodos(todos.filter((e) => {
      return (e !== todo);
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // definition of addTodo function which is passing through app.js to addTodo.js for adding new task!
  const addTodo = (title, desc) => {
    let toNo;
    if (todos.length === 0) {
      toNo = 0
    }
    else {
      toNo = todos[todos.length - 1] + 1;
    }
    let myTodo = {
      toNo: toNo,
      title: title,
      desc: desc
    }

    setTodos([...todos, myTodo]);
  }

  // todos list array which passes through app.js to todos.js and each element going through todos to todo using map function.
  const [todos, setTodos] = useState(initTodo);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]
  )

  return (
    <>
      <Header title="My-Milky-Way-List" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
