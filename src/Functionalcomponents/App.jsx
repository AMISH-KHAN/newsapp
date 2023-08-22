import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'

export default function App() {
  
  var [language,setlanguage]=useState("hi")
  var [search,setsearch]=useState("")
  const changeLanguage = (data) => {
    setlanguage(data)
  }
  const changeSearch=(data)=>{
    setsearch(data)
  }
  
    return (
      <>
            <BrowserRouter>
          <Navbar changeLanguage={changeLanguage} changeSearch={changeSearch } />
                <Routes>
                    <Route path='/' element={<Home search={search} language={language}  q={"all"} />}/>
                    <Route path='/politics' element={<Home search={search} language={language} q={"politics"} />}/>
                    <Route path='/crime' element={<Home search={search} language={language} q={"crime"}/>}/>
                    <Route path='/sports' element={<Home search={search} language={language} q={"sports"}/>}/>
                    <Route path='/education' element={<Home search={search} language={language} q={"education"}/>}/>
                    <Route path='/cricket' element={<Home search={search} language={language} q={"cricket"}/>}/>
            </Routes>
            </BrowserRouter>
            <Footer/>
      </>
    )
  }

