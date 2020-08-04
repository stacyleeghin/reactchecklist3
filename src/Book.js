import React,{ Component } from 'react'
class Book extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (

            <div className="card">
                <img src={this.props.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">01 May 2010 <br/>{this.props.type}</p>
                    <a href="#" className="btn btn-primary">REMOVE</a>
                </div>
            </div>
        )
    }
}
export default Book