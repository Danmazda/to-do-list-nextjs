import type { NextPage } from 'next'
import { useState } from 'react'
import List from '../components/List/List'
import TextInput from '../components/TextInput/TextInput'

export interface Items {
  id: number
  text: string
}
const listElements: Array<Items> = [
  { id: 1, text: 'Selecione para riscar' },
  { id: 2, text: 'Aperte o botão abaixo apara remover' },
]

const Home: NextPage = () => {
  const [list, setList] = useState(listElements)
  return (
    <div className="container mx-auto my-3 rounded-md bg-slate-900 p-3 px-7 text-center text-zinc-200 lg:w-4/5">
      <h1 className="mb-3 text-2xl">To do List</h1>

      <List list={list} setList={setList} />

      <TextInput list={list} setList={setList} />
    </div>
  )
}

export default Home
