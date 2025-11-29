
function Hello(){
    
    const getName = (yourname) => {
        return yourname;
    }

    function handleClick(){
        alert("Button was clicked!")
    }

    const handleInput = (event) => {
        console.clear()
          console.log("Value", event.target.value)
    }

    const handleMouseOver = () => console.log("Mouse is over the text")
    const handleDoubleClick = () => console.log("Mouse was double click")

    const name = "ankit"; 
    return (
        <>
       <h1>hello {getName(name)}</h1>
       <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
       <button onClick={handleClick}>Click Me</button>
       <button onClick={() => alert("hellow from inline function")}>Say Hello</button>
       <input type="text" onChange={handleInput} placeholder="Type Something "/>
        </>
    )

}


export default Hello    



