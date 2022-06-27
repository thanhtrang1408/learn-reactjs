import React from 'react'
import {Routes,Route, Link}  from 'react-router-dom'
import HomePage from "./Home"
import NewPage from "./New"
import ContactPage from "./Contact"

const DemoRouter = () => {
  return (
    <div>
        <h1> React Router</h1>
      <nav>
        <ul>
          <li><Link to = '/'> Home</Link> </li>
          <li><Link to = '/news'> New</Link> </li>
          <li><Link to = '/contact'> Contact</Link> </li>
      
        </ul>
      </nav>

     <Routes>

      <Route path="/" element={<HomePage/>}/>
      <Route path="/news" element={<NewPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>

     </Routes>
     

    </div>
  )
}

export default DemoRouter