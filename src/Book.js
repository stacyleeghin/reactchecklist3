import React,{ Component } from 'react'
class Book extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (

            <div className="card">
                <img src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/0617/9780061767593.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">L.A.Candy</h5>
                    <p className="card-text">01 May 2010 <br/>Hardback</p>
                    <a href="#" className="btn btn-primary">REMOVE</a>
                </div>
            </div>
        )
    }
}
export default Book