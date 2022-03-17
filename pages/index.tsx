import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Element {
  id: number
  text: string
}
const listElements: Array<Element> = [
  { id: 1, text: 'dever' },
  { id: 2, text: 'prova' },
]

const Home: NextPage = () => {
  const [list, setList] = useState(listElements)
  return (
    <div className="container mx-auto w-4/5 rounded-md bg-slate-900 p-3 text-center text-zinc-200">
      <h1 className="text-2xl mb-3">To do List</h1>
      <div className="mx-auto flex w-11/12 rounded-md bg-slate-100">
        <ul>
          {list.map((text) => (
            <div key={text.id} className="flex p-2 text-slate-900 align-middle justify-center">
              <input
              className="m-2"
                type="checkbox"
                name={text.text}
                onChange={() => {
                  setList((curr) => {
                    console.log(curr)
                    curr.splice(text.id - 1, 1)
                    console.log(curr)
                    return curr
                  })
                }}
              />
              <p>{text.text}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home
