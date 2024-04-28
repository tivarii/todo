import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './components/InputBox'


function App() {
  const [title, setTitle] = useState("");
  const changeHandler=(val:string)=>{
    setTitle(val);
    
  }
  

  return (
    <div className='w-full h-full'>
      <InputBox  >
      </InputBox>
      
    </div>
  )
}

export default App
