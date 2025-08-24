import { useState } from "react";

const Header = () => {
  return (
    <div>
      <header>
        <h1>Give feedback</h1>
      </header>
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return <button onClick = {handleClick}>{text}</button>
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, bad, neutral, all, average, positive }) => {
  
  if(all === 0){
    return <p>No feedback given</p>
  }
  
  return (
    <div>
      <h3>Statistics</h3>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral}/>
      <StatisticLine text="Bad" value={bad}/>
      <StatisticLine text="All" value={all}/>
      <StatisticLine text="Average" value={average}/>
      <StatisticLine text="Positive" value={`${positive} %`} />
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // totals
  const all = good + neutral + bad;
  let average = 0;
  let positive = 0;

  if (all > 0){
    average = (good-bad) / all;
    positive = (good / all) * 100;
  }

  return (
    <>
      <Header />

      <Button handleClick = {() => setGood(good + 1)} text="good" />
      <Button handleClick = {() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick = {() => setBad(bad + 1)} text="bad" />

      <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} positive={positive} />

    </>
  ); 
};

export default App;
