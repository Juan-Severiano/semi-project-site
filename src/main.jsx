import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Header from './components/Header.jsx'
import PodMat from './screens/PodMat.jsx'
import VideoAula from './screens/VideoAulas.jsx'
import IneditQuestions from './screens/IneditQuestions.jsx'
import About from './screens/About.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/podmat' element={<PodMat />} />
        <Route path='/videoaulas' element={<VideoAula />} />
        <Route path='/questoesineditas' element={<IneditQuestions />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
