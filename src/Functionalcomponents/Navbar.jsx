import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      search:""
    }
  }
  getdata(e) {
    this.setState({
      search:e.target.value
    })
  }
  postData(e) {
    e.preventDefault()
    // alert(this.state.search)
    this.props.changeSearch(this.state.search)
    this.setState({
      search: ""
    })
  }
  render() {
    return (
        <nav className="navbar navbar-expand-lg background sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to="/" onClick={()=>{this.props.changeSearch("")}}>Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/" onClick={()=>{this.props.changeSearch("")}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/politics" onClick={()=>{this.props.changeSearch("")}}>Politics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/crime" onClick={()=>{this.props.changeSearch("")}}>Crime</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/sports" onClick={()=>{this.props.changeSearch("")}}>Sports</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item " to="/education" onClick={()=>{this.props.changeSearch("")}}>Education</Link></li>
            <li><Link className="dropdown-item " to="/cricket" onClick={()=>{this.props.changeSearch("")}}>Cricket</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item " to="#">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language
          </Link>
          <ul className="dropdown-menu">
                  <li><button className='dropdown-item' onClick={()=>this.props.changeLanguage("en")}>English</button></li>
                  <li><button  className='dropdown-item' onClick={()=>this.props.changeLanguage("hi")}>Hindi</button></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
        </li>
      </ul>
      <form className="d-flex" role="search" onSubmit={(e)=>{this.postData(e)}}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name='search' onChange={(e)=>{this.getdata(e)}} value={this.state.search}/>
        <button className="btn btn-outline-success text-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
     
    )
  }
}
