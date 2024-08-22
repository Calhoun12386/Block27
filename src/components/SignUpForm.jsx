import { useState } from "react";

export default function SignUpForm({token ,setToken}) {

const [username, setUsername]=useState("Steven");
const [password, setPassword]=useState("password");
const [error, setError]=useState(null); 
 
const postHelper={
    method: "POST",
    headers: {
        "Content-Type": "applicagion/json"
    },
    body:JSON.stringify({username: username, password:password})
}



async function handleSubmit(event){

    event.preventDefault();
    //console.log("handleSubmit funtion")
    console.log(username)
    console.log(password)
   try{
    const response = await fetch ("https://fsa-jwt-practice.herokuapp.com/signup", postHelper);
    const result = await response.json();
    console.log(result)
    setToken(result.token)
    //console.log(result.token)
   }catch(error){setError(error.message)}
}
    return (
    <div>
    <h2>Sign Up!</h2>
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
        <label>Username: <input value={username} onChange={(e)=> setUsername(e.target.value)}/> </label>
        <label>Password: <input value ={password} onChange={(e)=>setPassword(e.target.value)}/></label>
        <button>Submit</button>
    </form>

    </div>
  )}