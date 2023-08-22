import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      language: "hi",
      search:""
    }
  }
  changeLanguage = (data) => {
    this.setState(
      {
      language:data
    }
    )
  }
  changeSearch=(data)=>{
    this.setState({
        search:data
    })
    
  }
  render() {
    return (
      <>
            <BrowserRouter>
          <Navbar changeLanguage={this.changeLanguage} changeSearch={this.changeSearch } />
                <Routes>
                    <Route path='/' element={<Home search={this.state.search} language={this.state.language}  q={"all"} />}/>
                    <Route path='/politics' element={<Home search={this.state.search} language={this.state.language} q={"politics"} />}/>
                    <Route path='/crime' element={<Home search={this.state.search} language={this.state.language} q={"crime"}/>}/>
                    <Route path='/sports' element={<Home search={this.state.search} language={this.state.language} q={"sports"}/>}/>
                    <Route path='/education' element={<Home search={this.state.search} language={this.state.language} q={"education"}/>}/>
                    <Route path='/cricket' element={<Home search={this.state.search} language={this.state.language} q={"cricket"}/>}/>
            </Routes>
            </BrowserRouter>
            <Footer/>
      </>
    )
  }
}
