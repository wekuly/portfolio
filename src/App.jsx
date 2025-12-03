import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Intro from './intro.jsx'
import Skills from './skills.jsx'
import Projects from './projects.jsx'
import Contact from './contact.jsx'
import Home from './home.jsx'

function App() {
  const [selectedItem, setSelectedItem] = useState(null)
  const [location, setLocation] = useState(window.location.pathname)

  const handleItemHover = (index) => {
    setSelectedItem(index)
  }

  return (
    <BrowserRouter basename="/portfolio">
      <div className="container">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home selectedItem={selectedItem} handleItemHover={handleItemHover} setLocation={setLocation} />} />
            <Route path="/intro" element={<Intro selectedItem={selectedItem} setSelectedItem={setSelectedItem} />} />
            <Route path="/skills" element={<Skills selectedItem={selectedItem} setSelectedItem={setSelectedItem} />} />
            <Route path="/projects" element={<Projects selectedItem={selectedItem} setSelectedItem={setSelectedItem} />} />
            <Route path="/contact" element={<Contact selectedItem={selectedItem} setSelectedItem={setSelectedItem} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
