import React,{ Component } from 'react';
import Book from './Book';
import Newbook from './Newbook';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      books:[
        { id:1,
          title:'L.A.Candy',
          type:'Hard back',
          image:'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/0617/9780061767593.jpg'
        },
        { id:2,
          title:'Strange Candy',
          type:'Hard back',
          image:'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/7553/9780755355440.jpg'
        },
        { id:3,
          title:'Candy store',
          type:'Hard back',
          image:'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4721/9781472153104.jpg'
        },
        { id:4,
          title:'I Spy Candy',
          type:'Hard back',
          image:'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/4395/9780439524742.jpg'
        },
        { id:5,
          title:'Candy',
          type:'Hard back',
          image:'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/7411/9781741148688.jpg'
        },
      ]
    }
  }

  render (){
    return (

      <div className="wrap">
          <header>
              <div className="navbar">
                  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                      <a className="navbar-brand" href="#">______________</a>
                      <button className="navbar-toggler" type="button" data-toggle="collapse"
                          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                          aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>

                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <form className="form-inline my-2 my-lg-0">
                              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                              <button className="btn-one" type="submit">Search</button>
                              <button className="btn btn-outline-success my-2 my-sm" type="submit"> Advanced Search</button>
                          </form>
                      </div>
                  </nav>
              </div>
          </header>
          <div className="booklist">
              <div className="breadcrumb"></div>
              <div className="main">
                  <div className="catalog">

                      {

                        this.state.books.map((item)=>{

                          var bookProps = {
                            ...item
                          }
                          return (

                            <Book {...bookProps} />
                          )
                        })
                      }
                  </div>
                  <div className="bookinput">
                      <div className="list">
                          <form>
                              <div className="form-group">
                                <label htmlFor="title-input">Title</label>
                                <input type="text" className="form-control" id="title-input"/>
                                <small id="choice" className="form-text text-muted">Type in your choice</small>
                              </div>
                              <div className="form-group">
                                <label htmlFor="type-input">Type</label>
                                <input type="text" className="form-control" id="type-input"/>
                              </div>
                              <button type="submit" className="btn btn-primary">Submit</button>
                          </form> 
                      </div>
                  </div>
              </div>
          </div>

      </div>
        
    )
  }
  handleBookInputChange = (e) =>{
    this.setState({bookInputValue: e. target.value})
  }

  // handleBookAdd = (e) => {
  //   var book ={
  //     id:Date.now(),
  //     text:this.state.bookInputValue

  //   }
  }
 
}

export default App;
