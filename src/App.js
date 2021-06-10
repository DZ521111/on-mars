// import logo from './logo.svg';
import "./App.css";
import Header from "./my_components/Header";
import { Todos } from "./my_components/Todos";
import { Footer } from "./my_components/Footer";
import { Todo } from "./my_components/Todo";

function App() {
  return (
    <>
      <Header title = "My-Milky-List" searchBar = {true}/>
      <Todos>
        <Todo />
      </Todos>
      <Footer />
    </>
  );
}

export default App;
