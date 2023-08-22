import React from 'react'

export default function Newssitem(props) {
  
    return (
      <>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div className="card mt-3 p-0 " >
  <img src={props.image} className="card-img-top" height="200px" alt="..."/>
  <div className="card-body"  >
                        <h5 className="card-title" style={{ height: "100px" }} >{props.title.slice(0, 60) + "...."}</h5>
                        <p className='source text-center'>{props.source.slice(0,20)+"..."}-{`${new Date(props.time).getDate()}/${new Date(props.time).getMonth()}/${new Date(props.time).getFullYear()}` }</p>
                       
                        <hr />
        <p className="card-text"  style={{ height: 150 + "px" }}>{props.desc.slice(0,130)+"..."}</p>
                        <a href={props.url} className="btn btn-primary btn-sm background w-100 text-center">Read More</a>
  </div>
</div>
        </div>
      </>
    )
  }

