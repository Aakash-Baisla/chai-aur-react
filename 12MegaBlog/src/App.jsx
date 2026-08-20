import { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login,logout} from "./store/authSlice"
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer"; // Adjust this path to match your folder structure!

function App() {
  // // to acces the env variable 
  // console.log(import.meta.env.VITE_APPWRITE_URL)

  const [loading,setloading] = useState(true)
  const dispatch = useDispatch()

 useEffect(() => {
  authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login(userData)); // Replace 'login(userData)' with your actual action
      }
      else{
        dispatch(logout())
      }
    })
    .catch((error) => {
      console.error("Auth error:", error); // Handles potential API failures
    })
    .finally(() => setloading(false));
}, []);


  return !loading ? (
    <div className='min-h-sc flex flex-wrap content-between bg-grey-400'>
      <div className='w-full block'>
      <Header/>
      <main>
        {/* <Outlet/> */}
      </main>
      <Footer/>
      </div>
    </div>
  ):null;
}

export default App
