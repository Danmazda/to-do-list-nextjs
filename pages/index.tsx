import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import List from "./components/List/List";


const Home: NextPage = () => {
  const [count, setCount] = useState(0)
  
  return (
    <div className="container mx-auto w-4/5 rounded-md bg-slate-900 p-3 text-center text-zinc-200">
      <h1 className="mb-3 text-2xl">To do List</h1>
      <div className="mx-auto flex w-11/12 rounded-md bg-slate-100">
        <List/>
      </div>
      <button className="m-3 bg-slate-400 p-2 rounded-md text-neutral-900 text-lg">Create new task</button>
    </div>
  )
}

export default Home
