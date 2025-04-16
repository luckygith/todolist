import { useEffect, useState } from "react";
import "../blocks/App.css";
import List from "./List";
import { getTodos, updateTodo, deleteTodo, getLists } from "../utils/api";
import Header from "./Header";
import CreateNewListModal from "./CreateNewListModal";

function App() {
  const [todos, setTodos] = useState([]);
  const [activeModal, setActiveModal] = useState([]);
  const [List, setList] = useState([]);

  const fetchTodos = () => {
    getTodos()
      .then((result) => {
        setTodos(result.data);
      })
      .catch((error) => console.log(error));
  };

  const fetchLists = () => {
    getLists()
      .then((result) => {
        setList(result.data);
        console.log("fetchlist is sent");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchLists();
  }, []);

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

  // const handleTesting = (_id) => {
  //   console.log("handle testing");
  //   console.log(_id);
  // };

  const handleCreateNewList = () => {
    console.log("CREATE BUTTON ACTIVE");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleCreateNewListClick = () => {
    setActiveModal("create-new-list");
    console.log("create new list clicked");
  };

  return (
    <div>
      <Header handleCreateNewList={handleCreateNewListClick} />
      <List
        todos={todos}
        fetchTodos={fetchTodos}
        handleEditCheck={handleEditCheck}
        handleDeleteTask={handleDeleteTask}
      />

      {activeModal === "create-new-list" && (
        <CreateNewListModal
          isOpen={activeModal === "create-new-list"}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
