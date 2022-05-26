import { useState, useEffect, useRef } from "react";
import Wrapper from "./Container.styled";
import Global from "./Global.styled";

function App() {
  // State는 직접적으로 수정할 수 없다. 오직 함수(react hook)를 통해서 수정할 수 있다.
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState(() => {
    const savedData = window.localStorage.getItem("toDoKey");
    if (savedData !== null) {
      return JSON.parse(savedData);
    } else {
      return [];
    }
  });
  const [editingIndex, setEditingIndex] = useState();
  const [newToDo, setNewToDo] = useState("");
  const [editInput, setEditInput] = useState("");

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((prevToDos) => [toDo, ...prevToDos]); // first parameter currentToDOs <- previous toDos, second parameter can be props.
    console.log(toDos); // this toDos are not previous toDos. This is rendering toDos (currently can see toDos on user's monitor)
  };
  const onRemove = (index) => {
    // filter(toDos배열의 요소, toDos배열의 인덱스)
    setToDos(toDos.filter((toDo, toDoIndex) => toDoIndex !== index));
  };

  const onEdit = (index) => {
    // const selectedItem = toDos.find((item) => toDos.indexOf(item) === index);
    // console.log(selectedItem);
    setEditingIndex(index);
  };

  const handleEditInput = (event) => {
    setEditInput(event.target.value);
  };

  useEffect(() => {
    window.localStorage.setItem("toDoKey", JSON.stringify(toDos));
  }, [toDos]);

  return (
    <>
      {/* html, body등 일괄 스타일 */}
      <Global />

      <Wrapper>
        <h1>My To Do List ({toDos.length})</h1>
        <p>What is your to-do-list Today?</p>
        <form onSubmit={onSubmit}>
          <input
            onChange={onChange}
            value={toDo}
            type="text"
            placeholder="Write your to do..."
          />
          <button id="inputBtn">Add To Do</button>
        </form>
        <ul>
          {toDos.map((item, index) => (
            <li key={index}>
              {editingIndex === index ? (
                <input type="text" value={newToDo} onChange={handleEditInput} />
              ) : (
                item
              )}
              <button id="listBtn" onClick={() => onRemove(index)}>
                ❌
              </button>
              <button id="editBtn" onClick={() => onEdit(index)}>
                Edit
              </button>
            </li>
          ))}
        </ul>
      </Wrapper>
    </>
  );
}
export default App;
