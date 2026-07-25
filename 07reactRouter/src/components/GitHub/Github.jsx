import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'

function Github() {
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch("https://api.github.com/users/Aakash-Baisla")
        .then(response => response.json()).
        then(data =>{
            console.log(data)
            setData(data)
        })
    },[])
    return (
        <>
        <img
        m-40 p-40
        src={data.avatar_url}
        alt={data.login}
        className="w-40 h-50 rounded-full border-4 border-black center"
      />
        <div className='text-center m -4 bg-beige-600 text-black p-4 text-3xl'>GitHub foolowers : {data.followers}</div>
        
        </>
    )
}

export default Github
