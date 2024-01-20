oimport React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header.jsx"

import  "./App.css"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
    hello
          <Route  path=''  element={""} />
        </Routes>
      </Router>
    </>
  )
}

export default App
