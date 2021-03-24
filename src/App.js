import { useState } from "react"
import './App.scss';

function App() {

    let user1 = {
      name: "John Doe",
      age: 51,
      email: "johndoe@gmail.com"
    }
    let user2 = {
      name: "cmiahe Tradio",
      age: 11,
      email: "cmiahetradio@gmail.com"
    }
    let user3 = {
      name: "Break Valuenzela",
      age: 51,
      email: "breakvalenzuela@gmail.com"
    }

  const [user, setUser] = useState(user1)

  const getuser1 = () => { 
    setUser(user1)
  }
  const getuser2 = () => { 
    setUser(user2)
  }
  const getuser3 = () => { 
    setUser(user3)
  }
  console.log(user.name)
  console.log(user.age)
  console.log(user.email)
  return (
    <>
        <h1>{user.name}</h1>
        <p>{user.age}</p>
        <p>{user.email}</p>
        <button onClick={getuser1}>Get User 1</button>
        <button onClick={getuser2}>Get User 2</button>
        <button onClick={getuser3}>Get User 3</button>
    </>
  );
}

export default App;
