import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let keyset1 = 'abcdefghijklmnopqrstuvwxyz'
let keyset2 = keyset1.toUpperCase()
let keyset3 = '!@#$%&*+-'
let keyset4 = '1234567890'

function App() {

  const [password, setPassword] = useState('Click on regenerate')

  const shuffle = (array) => {
    for (let i = 0; i < array.length; i++) {
      let swapIndex = Math.floor(Math.random() * (array.length - 1))
      let temp = array[i];
      array[i] = array[swapIndex]
      array[swapIndex] = temp
    }
    return array
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
  }


  const generatePassword = () => {
    let generatedString = ""
    let range = Math.floor(8 + Math.random() * 9)
    for (let i = 0; i <= range / 4; i++) {
      let random = Math.floor(Math.random() * keyset1.length)
      generatedString += keyset1[random]
    }
    for (let i = 0; i <= range / 4; i++) {
      let random = Math.floor(Math.random() * keyset2.length)
      generatedString += keyset2[random]
    }
    for (let i = 0; i <= range / 4; i++) {
      let random = Math.floor(Math.random() * keyset3.length)
      generatedString += keyset3[random]
    }
    for (let i = 0; i <= range / 4; i++) {
      let random = Math.floor(Math.random() * keyset4.length)
      generatedString += keyset4[random]
    }
    let shuffleString = shuffle(generatedString.split('')).join('')
    // console.log(shuffleString)
    setPassword(shuffleString)
  }

  return (
    <div className="p-4 w-full h-screen flex flex-col gap-12 items-center">
      <h1 className='text-3xl font-semibold tracking-wider' >Password Generator</h1>
      <div className='border-4 border-blue-600 rounded-xl p-8 w-[30rem] flex gap-4'>
        <p className='font-semibold text-2xl w-[50%] overflow-hidden text-ellipsis' >{password}</p>
        <div className='flex w-[50%] justify-around'>
          <button onClick={copyToClipboard} className='text-3xl hover:scale-125 transition-all duration-150 active:bg-green-400 p-3 rounded-xl'><i class="fa-solid fa-copy"></i></button>
          <button onClick={generatePassword} className='text-3xl transition-all duration-150 active:rotate-[360deg]' ><i class="fa-solid fa-arrows-rotate"></i></button>
        </div>
      </div>
    </div>
  )
}

export default App
