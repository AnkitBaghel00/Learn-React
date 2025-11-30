import { use } from "react"
import styles from "./Bye.module.css"

function Bye(){
// const user = {firstName:"John", lastName: "Doe", age:25}
const users = [
    {firstName:"John", lastName: "Doe", age:25},
    {firstName:"Akshay", lastName: "Kumar", age:52},
    {firstName:"Salman", lastName: "khan", age:65}
]


function fullName(user) {
    return user.firstName + " " + user.lastName;
}

return (
    <div>
        <h2>Person Details</h2>
        <ul>
        { users.map((user) => (
          <li>{fullName(user)} is {user.age }</li>
        ))}
        </ul>
        {/* <p>Full Name: {fullName(user)}</p>
        <p>Age: {user.age}</p> */}
    </div>
)
}

export default Bye