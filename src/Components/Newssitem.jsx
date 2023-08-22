import React, { Component } from 'react'

export default class Newssitem extends Component {
  render() {
    return (
      <>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12">
            <div className="card mt-2" >
  <img src={this.props.image} className="card-img-top" height="200px" alt="..."/>
  <div className="card-body"  >
                        <h5 className="card-title" style={{ height: 90 + "px" }} >{this.props.title.slice(0, 60) + "...."}</h5>
                        <p className='source text-center'>{this.props.source.slice(0,20)+"..."}-{`${new Date(this.props.time).getDate()}/${new Date(this.props.time).getMonth()}/${new Date(this.props.time).getFullYear()}` }</p>
                       
                        <hr />
        <p className="card-text"  style={{ height: 150 + "px" }}>{this.props.desc.slice(0,130)+"..."}</p>
                        <a href={this.props.url} className="btn btn-primary btn-sm background w-100 text-center">Read More</a>
  </div>
</div>
        </div>
      </>
    )
  }
}
