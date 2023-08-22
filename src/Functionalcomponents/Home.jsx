import React from 'react'
import { useState,useEffect } from 'react';
import Newssitem from './Newssitem';
import InfiniteScroll from "react-infinite-scroll-component";
export default function Home(props){
    
    var [totalResults,changetotalResults]=useState(0)
    var [articles,changearticles]=useState([])
    var [page,changepage]=useState(1)


    const getApiData = async() => {
        var response =""
        // alert(props.search)
        if (props.search) {
            response = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&page=1&language=${props.language}&sortBy=publishedAt&apiKey=77fe511decf24bd9a52f96361ae6f6ae`)
            
        }    
        else {
            response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&page=1&language=${props.language}&sortBy=publishedAt&apiKey=77fe511decf24bd9a52f96361ae6f6ae`)
            
        }
        const result = await response.json();
        console.log(result)
        changetotalResults(result.totalResults)
        changearticles(result.articles)
     }
    
    const fetchMoreData = async () => {
        
        changepage(page+1)
        var response =""
        // alert(this.props.search)
        if (props.search) {
            response = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&page=${page}&language=${props.language}&sortBy=publishedAt&apiKey=77fe511decf24bd9a52f96361ae6f6ae`)
            
        }    
        else {
            response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&page=${page}&language=${props.language}&sortBy=publishedAt&apiKey=77fe511decf24bd9a52f96361ae6f6ae`)
            
        }
        const result = await response.json();
       changearticles(articles.concat(result.articles))
    }

    useEffect(()=> {
        getApiData()
        // eslint-disable-next-line
   },[props])
  
    return (
      <>
            <div className='background my-2 p-2 w-100 text-center text-light '><h4>{ props.search.toUpperCase()?props.search:props.q.toUpperCase()}</h4></div>
            
                <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length<totalResults}
          loader={<div class="text-center w-100 my-2">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>}
        >
                <div className="row w-100  ">
       
                    {
                    articles.map((item,index)=>{
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
        
      </>
    )
  }
