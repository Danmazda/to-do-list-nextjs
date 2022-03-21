import { useState } from 'react'
import { Items } from '../../index'
import TextInput from '../TextInput/TextInput'
export type Props = {
  list: Items[]
  setList: React.Dispatch<React.SetStateAction<Items[]>>
}

const List = ({ list, setList }: Props) => {
  const numArray: number[] = []
  const [toBeDeleted, setToBeDeleted] = useState(numArray)
  function deleteItems(): void {
    setList(list.filter((item) => !toBeDeleted.includes(item.id)))
    setToBeDeleted([])
  }
  return (
    <div className="mx-auto flex flex-col rounded-md bg-slate-100">
      {list.map((text) => (
        <div key={text.id} className="flex  p-2 text-slate-900">
          <input
            className="m-2 "
            type="checkbox"
            name={text.text}
            onChange={() => {
              toBeDeleted.includes(text.id)
                ? setToBeDeleted(toBeDeleted.filter((id) => id != text.id))
                : setToBeDeleted([...toBeDeleted, text.id])
              console.log(toBeDeleted)
            }}
          />
          <p
            className={`${
              toBeDeleted.includes(text.id) ? 'line-through' : ''
            } align-middle`}
          >
            {text.text}
          </p>
        </div>
      ))}
      {toBeDeleted.length > 0 && (
        <button className="text-black" onClick={() => deleteItems()}>
          Delete selected Items
        </button>
      )}
    </div>
  )
}

export default List
