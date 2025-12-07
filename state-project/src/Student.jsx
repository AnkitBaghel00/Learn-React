import {useState} from 'react'

function Student() {
    const[student, setStudent] = useState({
        name: "John",
        grade: "O",
        city: "Pune"
    })

    const changeCity = () => {
        setStudent({...student, city: "Mumbai"})
    }
  return (
   <div>
    <p>Name : {student.name}</p>
    <p>Grade  : {student.grade}</p>
    <p>City : {student.city}</p>
    <button onClick={changeCity}>Change City</button>
  
    

   </div>
  )
}

export default Student
