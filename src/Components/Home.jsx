import React, { Component } from 'react'
import Newssitem from './Newssitem';
import InfiniteScroll from "react-infinite-scroll-component";
export default class Home extends Component {
    constructor() {
        super();
        this.state={
            totalResults: 0,
            articles: [],
            page:1
        }
    }
    
    getApiData = async() => {
        var response =""
        // alert(this.props.search)
        if (this.props.search) {
            response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&page=1&language=${this.props.language}&sortBy=publishedAt&apiKey=77fe511decf24bd9a52f96361ae6f6ae`)
            
        }    
        else {
            response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&page=1&language=${this.props.language}&sortBy=publishedAt&apiKey=77fe511decf24bd9a52f96361ae6f6ae`)
            
        }
        const result = await response.json();
        console.log(result)
        this.setState({
            totalResults: result.totalResults,
            articles:result.articles
        })
     }
     componentDidMount() {
        this.getApiData();
    }
    fetchMoreData = async () => {
        this.setState({
            page:this.state.page+1
        })
        var response =""
        // alert(this.props.search)
        if (this.props.search) {
            response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&page=${this.state.page}&language=${this.props.language}&sortBy=publishedAt&apiKey=77fe511decf24bd9a52f96361ae6f6ae`)
            
        }    
        else {
            response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&page=${this.state.page}&language=${this.props.language}&sortBy=publishedAt&apiKey=77fe511decf24bd9a52f96361ae6f6ae`)
            
        }
        const result = await response.json();
        console.log(result)
        this.setState({
            articles:this.state.articles.concat(result.articles)
        })
    }
    
    componentDidUpdate(oldprops) {
        if (this.props !== oldprops) {
            this.getApiData()
        }
    }
    render() {
    return (
      <>
            <div className='background mt-2 p-2 w-100 text-center text-light'><h4>{ this.props.search.toUpperCase()?this.props.search:this.props.q.toUpperCase()}</h4></div>
            <div className="container-fluid">
                <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length<this.state.totalResults}
          loader={<div class="text-center w-100 my-2">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>}
        >
                <div className="row">
       
                    {
                    this.state.articles.map((item,index)=>{
                        return <Newssitem
                            key={index}
                            image={item.urlToImage}
                            title={item.title}
                            desc={item.description}
                            time={item.publishedAt}
                            source={item.source.name}
                            url={item.url}
                        />
                    })
                }
                </div>
                </InfiniteScroll>
        </div>
      </>
    )
  }
}
