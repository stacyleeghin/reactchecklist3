import React,{ Component } from 'react'
class Newbook extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(

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
        )
    }
}
export default Newbook;