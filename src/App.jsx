import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header className='bg-amber-50 p-5 flex justify-around'>
          <div className='logo flex flex-row'>
            <h1 className='text-gray-600'>Your</h1>
            <h1 className='text-orange-500'>Logo</h1>
            <p>®</p>
            <button className='bg-orange-500 px-2 py-3'>Sign-up</button>
          </div>
        </header>
        <hr className='bg-gray-500' />
      </main>
    </>
  )
}

export default App
