import React, { useEffect } from 'react'

function Github() {
    const[data,setData]=React.useState([])
    useEffect(()=>{
        fetch('https://api.github.com/gowthamigutta').then((response)=>response.json()).then(data=>{
            console.log(data) 
            setData(data)
        })
    },[])
  return (
    <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>Github followers:{data.followers}
    <img src={data.avatar_url} width={300} alt=""/>
    </div>
)
}

export default Github