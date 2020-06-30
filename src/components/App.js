import React, { useEffect } from 'react'

const App = () => {
 
  useEffect(() => {
    console.log('App mounted!')
  }, [])
  return (
    <h1 onClick={() => alert('')}> click me！</h1>
  )
}

export default App
