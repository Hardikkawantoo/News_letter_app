import React, { Component } from 'react'
import News from './News'

export default class NewsCards extends Component {
    articles =[]
    constructor(){
        super();
        this.state = {
            articles : this.articles,
            loading : false
        }
        
    }

    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=30156646b7a546cfa224c4bac8c97317"
        let data = await fetch(url);
        let parsedata = await data.json()
        this.setState({articles : parsedata.articles})
    }
  render() {
    return (
      <div>
        <div className="container my-3">
          <div className="row">

            {this.state.articles.map((element)=>{
                return <div class="col-md-4" key={element.url}>
                <News title={element.title?element.title.slice(0,55):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            })}
            
            
            
          </div>
        </div>
      </div>
    )
  }
}
