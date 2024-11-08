import React, { useState } from "react"
import Navbar from "./Components/NavBar/Navbar"
import Video from "./Pages/Video/Video"
import {Route , Routes} from 'react-router-dom'
// import Home from "./Pages/Home/Home"
import Home from "./Pages/Home/Home"

const App = () => {


  const [sidebar,setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>} />
        <Route path='/video/:category/:videoId' element={<Video/>} />
      </Routes>
    </div>
  )
}

export default App