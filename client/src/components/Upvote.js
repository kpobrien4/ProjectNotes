import React, { Component } from 'react'

export class Upvote extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          upvotes: 0
        }
      }

      handleClick = (event) => {
        const upvoted = this.state.upvotes + 1
        this.setState({
           upvotes: upvoted 
        })
     }


    render(event) {
        return(
        <div>
        Upvotes: <button onClick={this.handleClick}>{this.state.upvotes}</button>
        </div>
        )
    }

}

export default Upvote