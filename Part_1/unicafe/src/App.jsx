import { useState } from 'react'

const Button = (props) => {
  return <button onClick={props.onClick}>{props.rating}</button>
}

const Statistics = ({ good, neutral, bad }) => {
  //upgraded props to destructure and make the code cleaner. 
  // new component to state the Statistics.

  const all = good+neutral+bad
  //split up the statistics to remove the NaN from showing.
  if (all!==0) {
    var average = (good-bad)/all;
    var positive = (good/all)*100;
  } else {
    var average = 0;
    var positive = 0;
  }

  return <div>
    <h1>Statistics</h1>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>All: {all} </p>
    <p>Average: {average} </p>
    <p>Positive: {positive} %</p>
    </div>
}
 
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // completed the code to work, but decided that i didnt like the format of inputting the varibles into the component
  const stats = { good, neutral, bad }

  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
        <Button onClick={() => setGood(good+1)} rating="Good" />
        <Button onClick={() => setNeutral(neutral+1)} rating="Neutral" />
        <Button onClick={() => setBad(bad+1)} rating="Bad" />
      </div>

      <Statistics {...stats} />

    </div>
  )
}

export default App