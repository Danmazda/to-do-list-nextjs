import { useState } from 'react'
import { Props } from '../List/List'

// Mesmo Tipo de classes que os itens da lista, estudar forma de repetir
const TextInput = ({ list, setList }: Props) => {
  const [buttonDisable, setButtonDisable] = useState(true)
  const [newItem, setNewItem] = useState({
    id: 0,
    text: '',
  })
  return (
    <div className="flex  flex-col items-center  p-2 text-slate-900">
      <input
        className="m-2 w-1/2 rounded-md text-center"
        type="text"
        placeholder="Insert new task here"
        id="text"
        onChange={(e) => {
          const value = e.target.value
          if (value.length === 0) {
            setButtonDisable(true)
          } else {
            setButtonDisable(false)
          }
          setNewItem({ id: list.length + 1, text: value })
        }}
      />
      <button
        className="mx-2 mb-1 w-1/2 rounded-md bg-slate-400 px-4 py-1 text-lg text-neutral-900"
        hidden={buttonDisable}
        onClick={() => {
          // !!!!DESTRUCTURINGGGGG
          setList([...list, newItem])
          // console.log(document.getElementById('text').value)
        }}
      >
        Create new task
      </button>
    </div>
  )
}

export default TextInput
