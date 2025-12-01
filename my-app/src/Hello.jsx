function Hello({name, age, city, hobbies}){
    
return (
    <>
    <h2>Hello, {name}</h2>
    <p>Age: {age}</p>
    <p>City: {city}</p>
    <ul>
        {hobbies.map((hobby, index)=> (
            <li key={index}>{hobby}</li>
        ))}
    </ul>
    </>
)
}


export default Hello    



  