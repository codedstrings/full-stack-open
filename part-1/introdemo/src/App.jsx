const Hello = (props) => {
  // props.name = props.name || "World";
  console.log(props); 
  return (
    <div>
      <p>Hello {props.name} age: {props.age}</p>
    </div>
  )
}
const App = () => {
  let now = new Date();
  let a = 10;
  let b = 20;
  console.log(now, a+b)
  return (
    <div>
      <p>Good Morning it is : {now.toString()} now</p>
      <p>Sum of {a} and {b} is : {a + b}</p>
      <Hello name = "mridhul" age={a+b}/>
      <Hello />
    </div>
  )
}

export default App