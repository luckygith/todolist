import { useEffect, useState } from "react";
import "../blocks/App.css";
import List from "./List";
import {
  getTodos,
  updateTodo,
  deleteTodo,
  getLists,
  createList,
} from "../utils/api";
import Header from "./Header";
import CreateNewListModal from "./CreateNewListModal";
import ListsSection from "./ListsSection";

function App() {
  const [todos, setTodos] = useState([]);
  const [activeModal, setActiveModal] = useState([]);
  const [lists, setLists] = useState([]);
  const [list, setList] = useState("");

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
        setLists(result.data);
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
    console.log("Updated lists:", lists);
  }, [lists]);

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

  // const handleCreateNewList = () => {
  //   console.log("CREATE BUTTON ACTIVE");
  // };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleCreateNewListClick = () => {
    setActiveModal("create-new-list");
    console.log("create new list clicked");
  };

  const handleAddList = () => {
    createList({ list })
      .then((result) => {
        console.log(result.data);
        setLists([result.data, ...lists]);

        setList("");

        handleCloseModal();
      })
      .catch((error) => {
        console.error("Error, add list request unsuccessful", error);
      });
    // .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <Header handleCreateNewListClick={handleCreateNewListClick} />
      <List
        todos={todos}
        fetchTodos={fetchTodos}
        handleEditCheck={handleEditCheck}
        handleDeleteTask={handleDeleteTask}
      />
      <ListsSection
        handleCreateNewListClick={handleCreateNewListClick}
        lists={lists}
        fetchLists={fetchLists}
      />

      {activeModal === "create-new-list" && (
        <CreateNewListModal
          isOpen={activeModal === "create-new-list"}
          handleCloseModal={handleCloseModal}
          handleAddList={handleAddList}
          list={list}
          setList={setList}
        />
      )}
    </div>
  );
}

export default App;
