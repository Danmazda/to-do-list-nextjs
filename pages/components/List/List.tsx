import { useState } from 'react'
import { Items } from '../../index'
export type Props = {
  list: Items[]
  setList: React.Dispatch<React.SetStateAction<Items[]>>
}

const List = ({ list, setList }: Props) => {
  const [toBeDeleted, setToBeDeleted] = useState([0])
  return (
    <div className="mx-auto flex  rounded-md bg-slate-100">
      <ul>
        {list.map((text) => (
          <div
            key={text.id}
            className="flex  items-center justify-center p-2 text-slate-900"
          >
            <input
              className="m-2 "
              type="checkbox"
              name={text.text}
              onChange={() => {
                toBeDeleted.includes(text.id)
                  ? setToBeDeleted(
                      toBeDeleted.filter((item) => item != text.id)
                    )
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
      </ul>
    </div>
  )
}

export default List
