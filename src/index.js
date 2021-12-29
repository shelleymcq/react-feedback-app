import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

// .render takes in two things, what we want to insert (the app component) and where we want to put it
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)