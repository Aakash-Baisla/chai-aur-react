import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username :"baisla",
    age : 22
  }
  return (
    <>
      {/* <h1 className='bg-green-400 margin 100 text-align-center text-orange p-100 rounded-xl'>Tailwind CSS Test </h1> */}
      {/* <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="image" src="https://images.pexels.com/photos/38373287/pexels-photo-38373287.jpeg" />
  </div>
  <div class="flex items-center md:items-start">
    <span class="text-2xl font-medium">Class Warfare</span>
    <span class="font-medium text-sky-500">The Anti-Patterns</span>
    <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div> */}

 {
 
    // <div className="w-40 h-10 flex flex-col mb-4 rounded-xl bg-black  ">
    //   <div>
    //     <img
    //       src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
    //       alt="test"
    //       className="mb-4 object-cover object-center rounded-t-xl"
    //     />
    //   </div>
    //   <div className="flex flex-col py-3 px-3 pb-10">
    //     <div className="flex justify-between ">
    //       <h1 className="font-bold ">Bored ape nft accidental</h1>
    //       <h1>Price</h1>
    //     </div>
    //     <div className="flex  justify-between">
    //       <p>#345</p>
    //       <p>0.01</p>
    //     </div>
    //   </div>
    // </div>
 
}
<div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://images.unsplash.com/photo-1545696968-1a5245650b36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-2xl font-semibold text-white">
          AirMax Pro
        </h1>

        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>

        <button className="mt-4 rounded-lg bg-black px-5 py-2 text-sm font-semibold text-white">
          View Details
        </button>
      </div>
    </div>

   
    <Card username = "Baisla05"/>
    </>


  )
}

export default App
