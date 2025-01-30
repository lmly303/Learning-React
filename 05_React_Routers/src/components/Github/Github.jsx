import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/lmly303')
    //     .then((response)=> response.json(response))
    //     .then((data)=>{
    //         setData(data)
    //     })
    // })
    
    const data = useLoaderData()


  return (
    <div className='text-center m-4 bg-amber-200 text-black p-4 text-3xl'>Public Repositories : {data.public_repos}
        <img src={data.avatar_url} alt="Profile Picture" width={300}/>
    </div>
  )
}

export default Github

export const githubInfo = async ()=>{
    const response = await fetch('https://api.github.com/users/lmly303')
    return response.json()
}