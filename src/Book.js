import React,{ Component } from 'react'
class Book extends Component{
    constructor(props){
        super(props)

        this.state = {
            isTitleUpdating:false,
            titleInput:this.props.title
        }
    }
    handleTitleDoubleClick = (e)=>{
        this.setState({
            isTitleUpdating:true
        })
    }

    handleTitleInputBlur= (e)=>{
        var id = this.props.id
        var data = {
            title:this.state.titleInput
        }
        this.props.updateBook(id,data)

        this.setState({
            isTitleUpdating:false
        })
    

    }

    handleTitleInputChange = (e)=>{
        this.setState({
            titleInput:e.target.value
        })
    }

    handleRemoveClick = (e)=>{
        e.preventDefault()
        var id = this.props.id
        this.props.removeBook(id)
      
    }

    render(){
        return (

            <div className="card">
                <img src={this.props.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title" onDoubleClick={this.handleTitleDoubleClick}>
                    {
                        this.state.isTitleUpdating == true? (
                            <input className="title-input" type="text" value={this.state.titleInput} onBlur={this.handleTitleInputBlur}
                            onChange={this.handleTitleInputChange}/>
                        ) : this.props.title
                    }
                    </h5>
                  
                    <p className="card-text">01 May 2010 <br/>{this.props.type}</p>
                    <a href="#" className="btn btn-primary" onClick={this.handleRemoveClick}>REMOVE</a>
                </div>
            </div>
        )
    }
}
export default Book