import Axios from 'axios';
import { useEffect, useState } from 'react';

export function F1(){
  const [data,setData]=useState([]);

  useEffect(()=> {
    Axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      if(res.status === 200){
        setData(res.data);
      }
      else{
        console.log("promise rejected");
        Promise.reject();   
      }
    })
    .catch((error)=>alert(error));
  },[])

  const Listnames=()=>{
    return data.map((val)=>{
      return <h1>{val.username}</h1>
    })
  }

  return(
    <div>
      <h2>F2 function</h2>
      {Listnames( )}
    </div>
  )
}