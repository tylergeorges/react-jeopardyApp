import { Component } from 'react';
import './App.css';

class App extends Component{
  state = {
    question: "",
    category: '',
    points: 0,
    answer: '',
    score: 0,
  }


  handleQuestion = async (e) =>{
    e.preventDefault()

     fetch('http://jservice.io/api/random')
     .then(res => res.json())
     .then(data =>  {this.setState({
       question: data[0].question,
       category: data[0].category.title,
       points: data[0].value,
       answer: data[0].answer,
      })})

     .catch(err => console.log(err))
  }

  
  handleAdd =  (e) =>{
    e.preventDefault()
    this.setState({score: Number(e.target.value) + Number(this.state.points)})
    console.log(this.state.score)
  }
  
  handleSub =  (e) =>{
    e.preventDefault()
    this.setState({score: Number(e.target.value) - Number(this.state.points)})
    console.log(this.state.score)
  }
  handleReset =  (e) =>{
    e.preventDefault()
    this.setState({score: 0})
    console.log(this.state.score)
  }

  render(){
  return (
    <div>
        <div className="container">
      <h1>Welcome to Jeopardy!</h1>
        <h2>Score: {this.state.score}</h2>
        <button className="handlers" onClick={this.handleAdd} value={this.state.score} id = "add">+</button>
        <button className="handlers" onClick={this.handleSub} value={this.state.score} id = "sub">-</button>
        <button className="handlers" onClick={this.handleReset}value={this.state.score}  id = "reset">↻</button>

        <h2>Catergory: {this.state.category}</h2>
        <h3>Points: {this.state.points}</h3>

        <h3>Question: {this.state.question}</h3>

        {/* <div id="hidden" tabIndex="1" >Reveal Answer</div> */}
        <label htmlFor="answer" id="reveal"value="Reveal Answer">Reveal Answer</label>
        <h3 id="answer" tabIndex="0">Answer: {this.state.answer}</h3>

        <button className="getQuestion" onClick={this.handleQuestion} id = "question">Question</button>
      </div>
    </div>
    )
  }
}

export default App;
