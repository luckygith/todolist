import axios from "axios";

const handleAddTask = () => {
  axios
    .post("http://localhost:3001/add", { task: task })
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
};
