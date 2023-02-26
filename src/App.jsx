import { useState } from 'react'
import data from '../data.json'
import './App.css'

function App() {
  // Get Score
  let s = 0
  data.forEach(d => {
    s += d.score
  })
  s = Math.floor(s/4)

  return (
    <div className="App">
      <div className="container">

        <div id='result' className="stat">
          <p className='title'>Your Result</p>
          <div className="circle">
            <p className="score">{s}</p>
            <p className="total">of 100</p>
          </div>
          <div className="text">
            <p className="status">Great</p>
            <p className="description">You scored higher than 65% of the people who have taken these tests</p>
          </div>
        </div>

        <div id='summary' className="stat">
          <p className="title">Summary</p>
          <div className='test-container'>
          {data.map(d=>{
            return (
              <div id={d.category} className='test'>
                <img className='icon' src={d.icon} alt="icon" />
                <p className='category'>{d.category}</p>
                <p className='ratio'><b>{d.score}</b> &nbsp;/ 100</p>
              </div>
            )
          })}
          </div>
          <button id="continue">Continue</button>
        </div>
      </div>
    </div>
  )
}

export default App
