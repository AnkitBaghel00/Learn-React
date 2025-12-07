import {useState} from 'react'

function UserProfile() {
    const[name, setName] = useState("Guest")
    const[age, setAge] = useState(18)
  return (
   <div>
    <button onClick={() => setName("Virat")}>Change Name</button>
    <button onClick={() => setAge(age + 1)}>Change Age</button>
    <p>Name : {name}</p>
    <p>Age  : {age}</p>

   </div>
  )
}

export default UserProfile
