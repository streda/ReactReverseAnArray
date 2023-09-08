import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialList = [
  { id: uuidv4(), title: "Big Bellies" },
  { id: uuidv4(), title: "Lunar Landscape" },
  { id: uuidv4(), title: "Terracotta Army" }
];

export default function List() {
  const [list, setList] = useState(initialList);

  function handleClick() {
    setList((prevLiat) => [...prevLiat].reverse());
  }

  return (
    <>
      <button onClick={handleClick}>Reverse</button>
      <ul>
        {list.map((element) => {
          return <li key={element.id}>{element.title}</li>;
        })}
      </ul>
    </>
  );
}
