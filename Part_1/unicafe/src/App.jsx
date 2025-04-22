import { useState } from 'react'

const Button = (props) => {
  return <button onClick={props.onClick}>{props.rating}</button>
}

const StatisticLine = ({ text, value }) => {
  return (
  <tr>
  <td>{text}</td>
  <td>{value}</td>
  </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad

  if (all===0) {
   return <div>
    <p>No feedback given.</p>
   </div>
  }

  const average = (good-bad)/all;
  const positivePercent = (good/all)*100;
  const positive = positivePercent+" %"

  return (
    <table>
      <tbody>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="All" value={all} />
      <StatisticLine text="Average" value={average} />
      <StatisticLine text="Positive" value={positive} />
      </tbody>
    </table>
  )
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

      <div>
        <h1>Statistics</h1>
        <Statistics {...stats} />
      </div>
    </div>
  )
}

export default App