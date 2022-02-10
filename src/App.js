import { Component } from 'react';
import './App.css';
import Question from './components/question';
import Category from './components/category';
import Points from './components/points';
import Score from './components/score';


class App extends Component{
  state = {
    questionObject: null,
  }


  handleQuestion = async (e) =>{
    e.preventDefault()
    try{
     const res = await fetch('http://jservice.io/api/random')
     const data = await res.json()
     this.setState({questionObject: data[0]})
     console.log(this.state.questionObject.question)
  }catch(err){
    console.log(err)
    }
  }
  


  render(){
  return (
    <div>
        <div className="container">
        <h1>Welcome to Jeopardy!</h1>

        {this.state.questionObject && <Score questionObject={this.state.questionObject}/>}
        {this.state.questionObject && <Points questionObject={this.state.questionObject}/>}
        {this.state.questionObject && <Category questionObject={this.state.questionObject}/>}
        {this.state.questionObject && <Question questionObject={this.state.questionObject}/>}
        <button className="getQuestion" onClick={this.handleQuestion} id = "question">Question</button>

      </div>
    </div>
    )
  }
}

export default App;
