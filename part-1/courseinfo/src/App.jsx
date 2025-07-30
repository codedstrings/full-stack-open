  const Header = (params) => {
    console.log(params);
    return (
      <>
        <h1>{params.course}</h1>
      </>
    )
  }

  const Content = (props) => {
    console.log(props);
    return (
      <>
      {
        props.parts.map((part, index) =>{
          return (
            <Part key={index} part={part.name} exercises={part.exercises}/>
          )
        })
      }
      </>
    )
  }
  
  const Total = (props) => {
    return (
      <>
        <p>Number of exercises {props.parts.reduce((sum, part) => sum + part.exercises, 0)}</p>
      </>
    )
  }

  const Part = (props) => {
    return (
      <>
        <p>{props.part} {props.exercises}</p>
      </>
    )
  }

const App = () => {
  const course = 'Half Stack application development'
const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

 return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App