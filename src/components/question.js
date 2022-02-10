const Question = (props) => {
return(
<div>
        <h3>Question: {props.questionObject.question}</h3>

        {console.log(props.score)}
        <label htmlFor="answer" id="reveal"value="Reveal Answer">Reveal Answer</label>
        <h3 id="answer" tabIndex="0">Answer: {props.questionObject.answer}</h3>
</div>
)
}

export default Question