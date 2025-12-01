import Hello from "./Hello"
import Bye from "./Bye"
function App() {
 const isLoggedIn = false;

 if(isLoggedIn){
  return <Hello />
 }else{
  return <Bye /> 
 }
}

export default App
