import { Component } from "react/cjs/react.production.min"

class Score extends Component {
    state = {
        score: 0
    }
    handleAdd =  (e) =>{
        e.preventDefault()
        this.setState({score: this.state.score +this.props.questionObject.value})
        console.log(this.state.score)
      }
      
      handleSub =  (e) =>{
        e.preventDefault()
        this.setState({score: this.state.score -this.props.questionObject.value})
        console.log(this.state.score)
      }
      handleReset =  (e) =>{
        e.preventDefault()
        this.setState({score: 0})
        console.log(this.state.score)
      }

    render(){
        return(
            <div>
            <h2>Score: {this.state.score}</h2>

                <button className="handlers" onClick={this.handleAdd} id = "add">+</button>
                <button className="handlers" onClick={this.handleSub}  id = "sub">-</button>
                <button className="handlers" onClick={this.handleReset} id = "reset">↻</button>
            </div>
        )
    }
 

}

export default Score