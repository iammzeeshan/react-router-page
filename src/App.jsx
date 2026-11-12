import { useState } from 'react'
import './App.css'
import workingImage from './assets/images/image-working.webp'
import playstoreIcon from './assets/images/icons/playstore.webp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header className='bg-white py-4 flex justify-around px-14'>
          <div className='logo flex flex-row items-center'>
            <h1 className='text-gray-600 text-3xl font-bold'>your</h1>
            <h1 className='text-orange-700 text-3xl font-bold'>logo</h1>
            <p>®</p>
          </div>
          <div className='flex items-center gap-5 font-medium'>
            <a className='hover:text-orange-700' href="#">Home</a>
            <a className='hover:text-orange-700' href="#">About</a>
            <a className='hover:text-orange-700' href="#">Contact</a>
            <a className='hover:text-orange-700' href="#">Github</a>
          </div>
          <div>
            <a className='px-8 hover:text-orange-700' href="#">Log in</a>
            <button className='bg-orange-700 px-6 py-2 rounded-xl  text-white'>Get started</button>
          </div>
        </header>
        <div className='h-px w-full bg-gray-300 opacity-60'></div>

        <div className='flex justify-around items-center gap-80 p-20' id="maindesign">
          <img className='w-68' src={workingImage} alt="" />

          <div className='flex flex-col'>
            <h1 className='text-4xl font-bold'>Download Now</h1>
            <h3 className='text-2xl font-bold text-right'>Lorem ipsum.</h3>
            <br />
            <button className='bg-orange-700 px-4 py-2 rounded-sm text-white flex items-center gap-1.5 self-end'>
              <img width={25} src={playstoreIcon} alt="" />
              Download Now
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
