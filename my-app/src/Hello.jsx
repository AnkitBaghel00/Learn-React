import './App.css'

function Hello(){
    
     const isVisible = false;
     const visibility = isVisible ? "visible" : "unvisible";

    return (
        <div>
            <h1 className={visibility}>Conditional rendering</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni unde, inventore ut iure voluptas necessitatibus esse quidem sint voluptatem ipsa veritatis natus eveniet iste error repellat, eos doloremque earum. Voluptatibus.</p>
        </div>
    )
     

}


export default Hello    



  