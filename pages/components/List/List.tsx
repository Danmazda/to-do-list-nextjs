import { useState } from "react";

interface Element {
  id: number
  text: string
}
const listElements: Array<Element> = [
  { id: 1, text: 'dever' },
  { id: 2, text: 'prova' },
]

const List = () => {
  const [list, setList] = useState(listElements)
  return (
    <ul>
      {list.map((text) => (
        <div
          key={text.id}
          className="flex justify-center p-2 align-middle text-slate-900"
        >
          <input
            className="m-2"
            type="checkbox"
            name={text.text}
            onChange={() => {
              setList(list.filter((i) => i.id != text.id))
            }}
          />
          <p>{text.text}</p>
        </div>
      ))}
    </ul>
  )
}

export default List
