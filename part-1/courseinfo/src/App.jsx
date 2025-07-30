  const Header = (params) => {
    console.log("Header props:", params);
    return (
      <>
        <h1>{params.course}</h1>
      </>
    )
  }

  const Content = (props) => {
    console.log("Content props:", props);
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
    console.log("total props: ", props)
    return (
      <>
        <p>Number of exercises {props.parts.reduce((sum, part) => sum + part.exercises, 0)}</p>
      </>
    )
  }

  const Part = (props) => {
    console.log("part props:", props)
    return (
      <>
        <p>{props.part} {props.exercises}</p>
      </>
    )
  }

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

 return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App