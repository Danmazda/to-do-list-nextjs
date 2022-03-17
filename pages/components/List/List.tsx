interface Items {
  id: number
  text: string
}
type Props = {
  list: Items[]
  setList: React.Dispatch<React.SetStateAction<Items[]>>
}

const List = ({ list, setList }: Props) => {
  return (
    <div className="mx-auto flex rounded-md bg-slate-100">
      <ul>
        {list.map((text) => (
          <div key={text.id} className="flex p-2 align-middle text-slate-900">
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
    </div>
  )
}

export default List
