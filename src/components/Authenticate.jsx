import { useState } from "react"



export default function Authenticate({token, setToken}) {
   
   //console.log(token)
   const [successMessage, setSuccessMessage]=useState(null)
   const [error, setError]=useState(null)
   const [data, setData]=useState("")

   async function handleClick(){
    try {
        const response = await fetch(
          "https://fsa-jwt-practice.herokuapp.com/authenticate",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const result = await response.json();
        console.log(result)
        setData(result.data)
        setSuccessMessage(result.message);
      } catch (error) {
        setError(error.message);
      }
}
   
   return (<div>
    
    <h2>Authenticate!</h2>
    {successMessage && <p>{successMessage}</p>}
    {error && <p>{error}</p>}
    <button onClick={handleClick}>Authenticate key</button>
    <p>data property: {data.iat}</p>
    <p>the returned data object doesnt have a username property to access, am i missing something?</p>
    
    </div>
)
  }