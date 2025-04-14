
const Header = ({course}) => {
  return (
  <div>
      <h1>{course.name}</h1>
  </div>
      )
}

const Part = ({partinfo}) => {
  return (
  <>
    <p>
      {partinfo.name} {partinfo.exercises}
    </p>
  </>
  )
}

const Content = ({course}) => {
  return (
    <div>
      <Part partinfo={course.parts[0]} />
      <Part partinfo={course.parts[1]} />
      <Part partinfo={course.parts[2]} />
    </div>
      )
}

const Footer = ({course}) => {
  return (
    <div>
      <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
    </div>
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

  // i understand i could have input the 'parts' only for the content and footer, but wanted to practice how to use the full JavaScript
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Footer course={course}  />
    </div>
  )
}

export default App