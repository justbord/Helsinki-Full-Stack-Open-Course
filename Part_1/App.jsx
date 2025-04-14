import { useState } from 'react'

const Button = (props) => {
  return <button onClick={props.onClick}>{props.rating}</button>
}
 
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // intially tried to create these values as a function that runs.
  // but this was not needed as they generate new values with the state change.
  const all = good+neutral+bad

  //split up the statistics to remove the NaN from showing.
  if (all!==0) {
    var average = (good-bad)/all;
    var positive = (good/all)*100;
  } else {
    var average = 0;
    var positive = 0;
  }

  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
        <Button onClick={() => setGood(good+1)} rating="Good" />
        <Button onClick={() => setNeutral(neutral+1)} rating="Neutral" />
        <Button onClick={() => setBad(bad+1)} rating="Bad" />
      </div>

      <div>
        <h1>Statistics</h1>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>All: {all} </p>
        <p>Average: {average} </p>
        <p>Positive: {positive} %</p>
      </div>
    </div>
  )
}

export default App