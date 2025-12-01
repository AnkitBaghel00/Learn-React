import Hello from "./Hello"
import Button from "./Button"
function App() {
    const hobbies = ["Robotics", "Reading", "Travelling"]

    function Message(){
        alert("Hello from message box")
    }
 return(
    <>
    <Hello name="Radhika" age={21} city="Pune" hobbies={hobbies}/>
    <Button label="Click Me" handleClick={Message} />
    </>
 )
}

export default App
