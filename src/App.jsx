import React from 'react'
import appState from './pages/mobxDemo/containers/appState'
import TimerView from './pages/mobxDemo/containers/TimerView'

function App() {
  return (
    <>
      <TimerView appState={appState} />
      <TimerView appState={appState} />
    </>
  )
}

export default App;
