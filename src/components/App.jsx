import { useEffect, useState } from "react";
import "../blocks/App.css";
import List from "./List";
import { getTodos, updateTodo, deleteTodo } from "../utils/api";
import Header from "./Header";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    getTodos()
      .then((result) => {
        setTodos(result.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleEditCheck = (id) => {
    updateTodo(id)
      .then((result) => {
        fetchTodos();
        console.log(result.data);
      })
      .catch((error) => console.log(error));
  };

  const handleDeleteTask = (id) => {
    deleteTodo(id).then((result) => {
      console.log(result);
      handleDeleteTask();
      fetchTodos();
    });
  };

  const handleTesting = (_id) => {
    console.log("handle testing");
    console.log(_id);
  };

  const handleCreateNewList = () => {
    console.log("CREATE BUTTON ACTIVE");
  };

  return (
    <div>
      <Header handleCreateNewList={handleCreateNewList} />
      <List
        todos={todos}
        fetchTodos={fetchTodos}
        handleEditCheck={handleEditCheck}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
